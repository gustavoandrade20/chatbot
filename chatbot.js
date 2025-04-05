const qrcode = require('qrcode-terminal');
const { Client, Buttons, List, MessageMedia } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Tudo certo! WhatsApp conectado.');
});

client.initialize();

const delay = ms => new Promise(res => setTimeout(res, ms));

client.on('message', async msg => {
    if (msg.body.match(/(menu|Menu|dia|tarde|noite|oi|Oi|Olá|olá|ola|Ola|0)/i) && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        const contact = await msg.getContact();
        const name = contact.pushname;
        await client.sendMessage(msg.from,
            'Olá! '+ name.split(" ")[0] + ' Bem-vindo(a) à MultiFit! 💪 \n'+
            'Sou o assistente virtual e estou aqui para te ajudar com tudo o que precisar. Escolha uma das opções abaixo para continuar: \n'+
            '1 - Informações sobre planos e preços. \n'+
            '2 - Horários e modalidades. \n'+
            '3 - Pagamento de mansalidade. \n'+
            '4 - Falar com o atendente \n'+
            '5 - Outros assuntos'
        );
    }

    if (msg.body === '1' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Plano Mensal: R$ 89,99/mês \n' +
            '\nPlano Trimestral: R$ 256,47 (Valor por mês R$ 80,99) \n' +
            '\nPlano Semestral: R$ 485,94 (Valor por mês R$ 76,99) \n' +
            '\nPlano Anual: R$ 917,98 (Valor por mês R$ 71,99) \n' +
            '\nMusculação Horário Econômico: Por R$ 64,99 /mês (11:30 às 15:00hrs) \n' +
            '\nMusculação + Aulas Coletivas: R$ 139,48/mês  \n' +
            '\nAulas Coletivas: R$ 64,99/mês '
        );
        await delay(3000)
        await client.sendMessage(msg.from, 'Será um prazer tirar todas as suas dúvidas, vou te explicar sobre nossos valores.\n'+
            '\nNossa mensalidade é R$89,99 + Taxa de Matrícula (apenas no primeiro mês) R$20,00.\n' +
            '\nMas temos também planos, como:\n' +
            '  Trimestral (3 meses): você paga 2×128,23\n' +
            '  Semestral (6 meses): você paga 3x161,98\n' +
            '  Anual (12 meses): você paga 5x183,59\n' +
            '\nOs planos parcelamos no cartão de crédito, dinheiro e via pix.'

        );
        await delay(3000);
        await client.sendMessage(msg.from, '0 – Voltar para menu inicial ');
    }

    if (msg.body === '2' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Aqui estão os horários e modalidades das aulas: \n' + 
            'Musculação: Segunda a sexta, 6h às 23h\n' + 
            'Sábado e Feriado: 7h às 12h\n' + 
            '\nAulas Coletivas: \n' +
            'Cross Training – GAP: Segunda-Feira, 18:45h às 20:20h\n' + 
            'Cross Training: Quinta-Feira, 18:45h às 20:20h '
        );
        await delay(3000);
        await client.sendMessage(msg.from, '0 – Voltar para menu inicial');
    }

    if (msg.body === '3' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, '💳 Pagamento da Mensalidade\n' +
            'Para manter sua assinatura ativa, realize o pagamento via PIX:\n' +
            '\nChave PIX: kyristonguerra.costa@gmail.com\n' + 
            '\nApós o pagamento, encaminhe o comprovante para confirmarmos sua mensalidade.\n' +
            '\nPara pagamento no cartão, solicite o link com o nosso atendente.'
        );
        await delay(3000);
        await client.sendMessage(msg.from, '0 – Voltar para menu inicial');
    }

    if (msg.body === '4' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Ótimo! Estamos aqui para te ajudar a alcançar seus objetivos. Em que posso te ajudar?');
        await delay(3000);
        await client.sendMessage(msg.from, '0 – Voltar para menu inicial');
    }

    if (msg.body === '5' && msg.from.endsWith('@c.us')) {
        const chat = await msg.getChat();
        await delay(3000);
        await chat.sendStateTyping();
        await delay(3000);
        await client.sendMessage(msg.from, 'Claro! Me conte o que precisa, e vou fazer o possível para ajudar. Se preferir, posso te encaminhar para um atendente. É só dizer!');
        await delay(3000);
        await client.sendMessage(msg.from, '0 – Voltar para menu inicial');
    }
});