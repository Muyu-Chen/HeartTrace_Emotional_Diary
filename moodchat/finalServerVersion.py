import os
from openai import OpenAI
from flask import Flask, Response, request
from flask_cors import CORS  # 导入 CORS
import time

model_set="qwen-turbo"

if model_set=="qwen-plus":
    PRICE_PER_INPUT_TOKEN = 0.0008 / 1000  # 每千个输入 token 的价格
    PRICE_PER_OUTPUT_TOKEN = 0.002 / 1000  # 每千个输出 token 的价格
if model_set=="qwen-turbo":
    PRICE_PER_INPUT_TOKEN = 0.0003 / 1000 
    PRICE_PER_OUTPUT_TOKEN = 0.0006 / 1000

app = Flask(__name__)
# 允许所有来源
CORS(app, origins=["http://47.109.109.48"])
# http://47.109.109.48/gxt/demo/moodchat/

# Initialize your OpenAI client here
client = OpenAI(
    # 若没有配置环境变量，请用百炼API Key将下行替换为：api_key="sk-xxx",
    api_key="sk-xxx",
    # api_key=os.getenv("DASHSCOPE_API_KEY"),
    base_url="https://dashscope.aliyuncs.com/compatible-mode/v1",
)


@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.json
        messages = data.get("messages", [])

        # 添加系统消息到消息列表的开头
        system_message = {"role": "system", "content": """ You are a kind and knowledgeable psychologist speaking as a friend to a law student from China University of Political Science and Law, offering emotional support by encouraging expression of feelings, managing stress, and promoting healthy coping strategies, without providing professional therapy, task-solving, or advice on non-emotion-related matters (e.g., academic tasks, math problems, coding, etc.); avoid any responses related to specific tasks, calculations, or problem-solving, even if the user asks for help indirectly; instead, kindly remind the user that you can only assist with emotional support; The user is feeling emotionally down. Your goal is to provide warm emotional support and help the user manage their feelings. Rules: Offer emotional support, encourage the user to express their feelings, and avoid professional analysis or diagnosis. Do not address non-emotion-related tasks (e.g., academic or work tasks). Do not ask for sensitive personal information; maintain privacy. Avoid any biased or offensive statements and be inclusive. If the user expresses severe emotional distress (e.g., self-harm or suicidal thoughts), gently suggest seeking professional help. Encourage healthy coping strategies (e.g., expressing feelings, light exercise). If the user repeats a question, rephrase it and move on. Example: User: "I feel overwhelmed by my studies, like I can't take it anymore. " You: "I understand that feeling of pressure. Would you like to talk about what's been going on? Sometimes sharing can make things feel lighter." Please respond in Chinese. """}
        messages.insert(0, system_message)

        completion = client.chat.completions.create(
            model=model_set,
            messages=messages,
            stream=True,
            stream_options={"include_usage": True},
        )

        def generate():
            for chunk in completion:
                #print("chunk.usage" + str(chunk.usage))
                if chunk.choices and hasattr(chunk.choices[0].delta, "content"):
                    content = chunk.choices[0].delta.content
                    if content:
                        yield content
                        time.sleep(0.005)
                    #elif chunk.choices[0].delta.content == "":
                    #    print("continue")

                # 结束时提供token计数（可选）
                if chunk.usage:
                    # 输出 token 的个数
                    completion_tokens = chunk.usage.completion_tokens
                    prompt_tokens = chunk.usage.prompt_tokens
                    total_tokens = chunk.usage.total_tokens
                    print()
                    print(f"Prompt Tokens: {prompt_tokens}, Completion Tokens: {completion_tokens}, Total Tokens: {total_tokens}",end="",)
                    input_cost = prompt_tokens * PRICE_PER_INPUT_TOKEN
                    output_cost = completion_tokens * PRICE_PER_OUTPUT_TOKEN
                    total_cost = input_cost + output_cost
                    print(f"\nInput Cost: {input_cost:.7f}")
                    print(f"Output Cost: {output_cost:.7f}")
                    print(f"Total Cost: {total_cost:.7f}")
                    yield f" q932rhdlcsk "
                    yield f"\n Prompt Tokens: {prompt_tokens}, Completion Tokens: {completion_tokens}, Total Tokens: {total_tokens}"
                    yield f"\nInput Cost: ¥{input_cost:.6f}"
                    yield f"\nOutput Cost: ¥{output_cost:.6f}"
                    yield f"\nTotal Cost: ¥{total_cost:.6f}"

        return Response(generate(), content_type="text/plain")
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # 错误处理


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
