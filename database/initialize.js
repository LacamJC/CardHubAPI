const sequelize = require('./conexao'); // Importe a instância do Sequelize
const AppInfo = require('./bd_info'); // Importe seu modelo Sequelize
console.log("Chamando inserção de dados");
const dadosParaInserir = [
            {
                id : "facebook",
                url_img : "/img/facebook_logo.svg",
                alt_txt : "Icone do facebook",
                body_text : "O Facebook é uma rede social que permite conversar com amigos e compartilhar mensagens, links, vídeos e fotografias",
                a_link : "https://www.facebook.com/",
                site_name : "Facebook"
            },
            {
                id : "instagram",
                url_img : "img/instagram_logo.svg",
                alt_txt : "Icone do Instagram",
                body_text : "O Instagram é uma rede social online de compartilhamento de fotos e vídeos entre seus usuários.",
                a_link : "https://www.instagram.com/",
                site_name : "Instagram"
            }, 
            
            {
                id : "whatsapp",
                url_img : "img/whatsapp_logo.svg",
                alt_txt : "Icone do Whatsapp",
                body_text : "WhatsApp é um aplicativo multiplataforma de mensagens instantâneas e chamadas de voz para smartphones.",
                a_link : "https://www.whatsapp.com/",
                site_name : "Whatsapp"
            },
            
            {
                id : "linkedin",
                url_img : "img/linkedin_logo.svg",
                alt_txt : "Icone do Linkedin",
                body_text : "O LinkedIn é uma plataforma de rede social profissional utilizada para conectar profissionais e construir redes de contatos.",
                a_link: " https://www.linkedin.com/",
                site_name : "Linkedin"
            },
        
            {
                id : "youtube",
                url_img : "img/youtube_logo.svg",
                alt_txt : "Icone do Youtube",
                body_text :  "O YouTube é uma plataforma online de compartilhamento de vídeos.",
                a_link : "https://www.youtube.com/",
                site_name : "Youtube"
            },
        
            {
                id : "github",
                url_img : "img/git_hub_logo.svg",
                alt_txt : "Icone do Github",
                body_text : "O GitHub é uma plataforma de hospedagem de código-fonte usando Git. Facilita colaboração, controle de versão e integração contínua para projetos de software.",
                a_link : "https://github.com/",
                site_name : "Github"
            }
];

async function inicializarBancoDeDados() {
  try {
    // Sincroniza o banco de dados (cria as tabelas se não existirem)
    await sequelize.sync({ force: true });

    // Insere os dados
    await AppInfo.bulkCreate(dadosParaInserir);

    console.log('Banco de dados inicializado com sucesso.');
  } catch (error) {
    console.error('Erro ao inicializar o banco de dados:', error);
  } finally {
    // Encerra a conexão com o banco de dados
    await sequelize.close();
  }
}

inicializarBancoDeDados();
