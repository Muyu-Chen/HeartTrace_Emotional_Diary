    let timeDeley = 30;  // 设置显示速度，可以根据需要调整延迟
    let isProcessing = false // 标记当前是否在处理 AI 消息，避免重复发送
    let messages = [] // 存储聊天记录的数组

    // 处理用户点击按钮发送自定义消息
    function sendCustomMessage(message, isPreset = false) {
      if (isProcessing) return // 如果当前在处理消息，禁止发送新消息

      if (!isPreset) {
        // 如果消息不是预设（即用户手动输入），则显示用户消息
        displayUserMessage(message)
      }

      processAIMessage(message) // 处理并发送消息到 AI
    }

    // 显示用户的消息到聊天框中
    function displayUserMessage(message) {
      const chatBox = document.getElementById('chat-box') // 获取聊天框元素
      const userMessageContainer = document.createElement('p') // 创建一个新的 p 元素用于显示消息
      userMessageContainer.classList.add('message', 'user-message') // 添加用户消息的样式
      userMessageContainer.innerHTML = `<strong>You:</strong> ${message}` // 设置消息内容
      chatBox.appendChild(userMessageContainer) // 将消息添加到聊天框中
      scrollToBottom() // 聊天框滚动到最底部
    }

    // 在用户按下回车键时触发发送消息
    document.getElementById('message-input').addEventListener('keydown', async (event) => {
      if (event.key === 'Enter' && !isProcessing) {
        event.preventDefault() // 防止回车导致换行
        document.getElementById('send-button').click() // 模拟点击发送按钮
      }
    })

    // 逐字显示 AI 的回复消息
    function typeText(element, text, delay = 15) {
      let index = 0

      // 递归逐字添加文本到聊天框中
      function addCharacter() {
        if (index < text.length) {
          element.innerHTML += text[index] // 添加当前字符
          index++
          setTimeout(addCharacter, delay) // 通过设置延迟实现逐字显示效果
          scrollToBottom() // 保持聊天框滚动到最底部
        } else {
          // 当所有字符显示完成时，启用发送按钮
          document.getElementById('send-button').disabled = false
          isProcessing = false // 处理完成，允许新的消息发送
        }
      }
      addCharacter() // 开始逐字显示
    }

    // 处理发送消息并与 AI 交互
    async function processAIMessage(message) {
      isProcessing = true // 标记为正在处理，避免重复点击发送
      document.getElementById('send-button').disabled = true // 禁用发送按钮

      const chatBox = document.getElementById('chat-box') // 获取聊天框元素

      // 第一次消息发送后显示聊天框
      document.getElementById('chat-box').style.display = 'block'

      // 隐藏聊天框上方的标题，给聊天框腾出空间
      document.getElementById('chat-title').style.display = 'none'

      // 将用户消息存入消息数组中
      messages.push({ role: 'user', content: message })

      // 发送用户消息到后端，获取 AI 回复
      const response = await fetch('http://47.109.109.48:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messages }) // 将消息数组发送给后端
      })

      const reader = response.body.getReader() // 创建一个 reader 读取 AI 的流式响应
      const decoder = new TextDecoder('utf-8') // 用于解码字节流为字符串
      let result = '' // 存储 AI 回复
      let firstChunk = true // 标记是否是首次接收到响应数据

      // 循环读取 AI 的回复，直到读取完毕
      while (true) {
        const { done, value } = await reader.read() // 从流中读取数据
        if (done) {
          // 当所有字符显示完成时，启用发送按钮
          document.getElementById('send-button').disabled = false
          isProcessing = false // 处理完成，允许新的消息发送
          console.log("result: ", result);
          break // 如果没有更多数据，则退出循环

        }


        const chunk = decoder.decode(value, { stream: true }) // 解码当前 chunk
        //result += chunk // 将 chunk 添加到结果中

        // 当第一次收到数据时，创建 AI 回复的消息容器
        if (firstChunk) {
          const aiMessageContainer = document.createElement('p') // 创建 p 元素显示 AI 消息
          aiMessageContainer.classList.add('message', 'ai-message') // 添加 AI 消息样式
          aiMessageContainer.innerHTML = `<strong>AI:</strong> <span id="ai-response-${messages.length}"></span>`
          chatBox.appendChild(aiMessageContainer) // 将 AI 消息容器添加到聊天框

          firstChunk = false
        }
        const parts = chunk.split("---END---");
        for (const part of parts) {
          let j = 0;
          // 去除可能的前后空格
          const cleanPart = part.trim();
          const element = document.getElementById(`ai-response-${messages.length}`)
          // 如果 cleanPart 包含特定字符串，设置标志位
          if (cleanPart.includes("q932rhdlcsk")) {
            j = 1;  // 设置标志位
            //continue;  // 跳过特定字符串
            const index = cleanPart.indexOf("q932rhdlcsk");
            partBefore = cleanPart.slice(0, index);  // 标志位前的部分
            partAfter = cleanPart.slice(index + "q932rhdlcsk".length);  // 标志位后的部分
          }
          else {
            partBefore = cleanPart;
            partAfter = "";
          }
          result += partBefore; // 将 chunk 添加到结果中
          for (let char of partBefore) {
            result += char; // 将字符添加到结果中
            element.innerHTML += `${char}`;
            scrollToBottom();
            //chatBox.innerHTML += `${char}`; // 显示当前字符
            //chatBox.scrollTop = chatBox.scrollHeight; // 滚动到底部
            await new Promise(resolve => setTimeout(resolve, timeDeley)); // 控制显示速度，可以根据需要调整延迟
          }

          if (j == 1) {
            j++;
            element.innerHTML += `<p>${partAfter}</p>`;
            scrollToBottom();
          }
        }

        scrollToBottom();
      }

      // 逐字显示 AI 的回复
      //const aiResponseElement = document.getElementById(`ai-response-${messages.length}`)
      //typeText(aiResponseElement, result, 10) // 设置每个字符的显示间隔为 10 毫秒

      // 将 AI 回复存储到消息数组中
      messages.push({ role: 'assistant', content: result })

      // 滚动聊天框到最底部
      scrollToBottom()
    }

    // 处理发送按钮点击事件
    document.getElementById('send-button').addEventListener('click', async () => {
      if (isProcessing) return // 如果 AI 还在处理上一条消息，禁止发送

      const messageInput = document.getElementById('message-input')
      const message = messageInput.value

      if (!message) return // 如果输入框为空，不发送消息

      sendCustomMessage(message, false) // 发送用户手动输入的消息

      messageInput.value = '' // 清空输入框
    })

    // 确保聊天框滚动到最底部
    function scrollToBottom() {
      const chatBox = document.getElementById('chat-box')
      setTimeout(() => {
        chatBox.scrollTop = chatBox.scrollHeight // 设置滚动位置为聊天框内容高度，即最底部
      }, 1)
    }

