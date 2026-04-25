document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle Chatbot Window
    chatbotToggle.addEventListener('click', () => {
        chatbotWindow.classList.add('active');
        chatbotToggle.style.transform = 'scale(0)';
    });

    chatbotClose.addEventListener('click', () => {
        chatbotWindow.classList.remove('active');
        chatbotToggle.style.transform = 'scale(1)';
    });

    // Handle Messages
    const sendMessage = () => {
        const text = chatbotInput.value.trim();
        if (text === '') return;

        // Add user message
        appendMessage(text, 'user');
        chatbotInput.value = '';

        // Simulate AI thinking and response
        setTimeout(() => {
            const response = getMockAIResponse(text);
            appendMessage(response, 'bot');
        }, 1000);
    };

    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function appendMessage(text, sender) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${sender}`;
        bubble.innerHTML = text;
        chatbotMessages.appendChild(bubble);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Mock AI Logic based on company info
    function getMockAIResponse(query) {
        const q = query.toLowerCase();
        if (q.includes('会社') || q.includes('概要') || q.includes('代表') || q.includes('社長')) {
            return '株式会社TechAcademyは2020年4月に設立されたオンラインプログラミングスクールです。代表取締役は山田太郎です。東京都千代田区丸の内に本社を構えています。';
        } else if (q.includes('コース') || q.includes('種類') || q.includes('カリキュラム')) {
            return '現在、「Webアプリケーション開発コース」「AI & データサイエンスコース」「UI/UXデザインコース」の3つを提供しています。未経験から実践的なスキルを習得できます！';
        } else if (q.includes('料金') || q.includes('費用') || q.includes('いくら')) {
            return 'コースや受講期間によって異なります。詳細なお見積もりやご相談は、トップページの「お問い合わせ」から無料カウンセリングにお申し込みください。';
        } else if (q.includes('法人') || q.includes('研修')) {
            return '法人向けのIT研修サービスも提供しております。トップページの「お問い合わせ」内、「法人のお客様」フォームからお気軽にご相談ください。';
        } else if (q.includes('実績') || q.includes('転職')) {
            return '当スクールの転職成功率は98%、累計卒業生数は10,000名を超えます。多くの受講生が未経験からIT業界への転職を成功させています！';
        } else if (q.includes('ありがとう') || q.includes('サンキュー')) {
            return 'どういたしまして！他にご質問があればいつでもお聞きください。';
        } else {
            return 'ご質問ありがとうございます。申し訳ありませんが、その内容については現在のところお答えできません。詳細はお問い合わせフォームからご連絡ください。';
        }
    }
});
