// ---------- dados das obras (fonte única para index.html e obra.html) ----------
// Cada obra: t título, a autor, e época, s situação, d domínio a partir de (se protegida),
// esc escola ou tema, ed edição indicada (vazio = em conferência),
// sym símbolos conferidos ("◇ ✎" etc.), links por formato (vazio = não mostrar)
const ERAS = [
  {id:"antig", nome:"Antiguidade", cor:"#4E4236"},
  {id:"medio", nome:"Idade Média e mundo islâmico", cor:"#3C4A42"},
  {id:"renasc", nome:"Renascimento e política moderna", cor:"#64393A"},
  {id:"ilum", nome:"Iluminismo e contrato", cor:"#33455A"},
  {id:"liberal", nome:"Liberalismo clássico", cor:"#4A3D57"},
  {id:"xix", nome:"Século XIX", cor:"#5A5034"},
  {id:"xx", nome:"Século XX e Brasil", cor:"#364B4B"},
];

const OBRAS = [
  // Antiguidade
  {t:"A República", a:"Platão (428–348 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega",
   img:"https://m.media-amazon.com/images/I/71p9NTtFrzL._SL1500_.jpg",
   sobre:{
     obra:"A República é talvez o livro que mais moldou a forma como o Ocidente pensa a política. Platão o escreveu como um longo diálogo em que Sócrates e alguns interlocutores discutem o que é uma vida boa, como deve ser uma cidade bem ordenada e, sobretudo, o que é a justiça.\n\nA pergunta de partida é simples e desconcertante. As primeiras respostas, como «dar a cada um o que lhe é devido», são examinadas e postas à prova uma a uma. O desafio mais forte vem de Glauco, que pede a Sócrates que prove que ser justo é melhor do que parecer justo, mesmo que a injustiça trouxesse vantagens sem que ninguém percebesse.\n\nPara responder, Platão constrói uma cidade no discurso, e a estrutura dela espelha a da alma: produtores, guardiões e governantes filósofos. A justiça aparece quando cada parte cumpre a sua função sem invadir a dos outros. Essa cidade também é uma escola. A música, a ginástica, a matemática e a dialética formam o caráter antes de formar o soldado ou o governante.\n\nMuitas imagens atravessam o livro e permanecem na memória, como a alegoria da caverna, em que homens presos desde a infância tomam sombras projetadas na parede pela própria realidade. Ler A República é, em parte, aprender a desconfiar das opiniões que parecem óbvias e a perguntar o que as sustenta.\n\nPor que ler hoje? Porque o livro não entrega respostas prontas. Ele obriga o leitor a pensar sobre poder, desigualdade, educação e a relação entre o indivíduo e a comunidade, e deixa uma pergunta que continua aberta: uma sociedade justa depende de governantes raros, ou pode ser construída por cidadãos comuns que pensam bem?"
   },
   edicoes:[
     {nome:"Edipro", sym:"◆ ✎", img:"https://m.media-amazon.com/images/I/71p9NTtFrzL._SL1500_.jpg",
      ed:"Edipro, 496 páginas. Tradução do grego por Edson Bini, com notas de rodapé.",
      sobre:"Terceira edição da Edipro (2019), com 496 páginas. Traduzida do grego por Edson Bini, a partir do texto estabelecido por Hermann para a Teubner. Traz a numeração de Stephanus nas margens, uma cronologia da obra de Platão, dados biográficos e uma sinopse dos temas.",
      links:{simples:"https://www.amazon.com.br/dp/8552100746?tag=acidadela-20", kindle:"https://www.amazon.com.br/dp/B084RKRNPH?tag=acidadela-20"}},
     {nome:"Principis", sym:"◇ ✎", img:"https://m.media-amazon.com/images/I/61iW5sHVzdL._SL1500_.jpg",
      ed:"Principis, 640 páginas. Tradução do inglês por Fábio Meneses Santos, com comentário de Benjamin Jowett.",
      sobre:"Edição da Principis (2021), com 640 páginas. Traduzida do inglês, a partir da versão de Benjamin Jowett, que acompanha o texto com comentários e uma análise extensa da obra. Por ser feita de outra língua, não substitui a tradução direta do grego, mas oferece um comentário amplo para quem busca uma leitura guiada.",
      links:{simples:"https://www.amazon.com.br/dp/6555524146?tag=acidadela-20", kindle:"https://www.amazon.com.br/dp/B0929B4C8N?tag=acidadela-20"}}
   ]},
  {t:"Apologia de Sócrates", a:"Platão (428–348 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega",
   sobre:{obra:"A Apologia de Sócrates relata a defesa do filósofo diante de um tribunal de Atenas, em 399 a.C. Acusado de não reconhecer os deuses da cidade, de introduzir divindades novas e de corromper a juventude, Sócrates enfrentava a pena de morte. O texto é tradicionalmente atribuído a Platão, que estava presente.\n\nSócrates não recorre à emoção. Em vez de pedir a piedade dos juízes, como era costume, examina cada acusação. Mostra que nunca cobrou por seus ensinamentos e explica de onde veio sua missão, a partir de uma resposta do oráculo de Delfos. Afirma que preferiria a morte a abandonar a filosofia, porque para ele uma vida sem exame não vale a pena ser vivida.\n\nUm júri de 501 cidadãos o declarou culpado. A condenação e as palavras finais de Sócrates, sobre o que é morrer e o que é viver, fecham o texto com a mesma coerência com que ele viveu.\n\nPor que ler? Porque é um dos registros mais diretos de um pensador que deu sua vida à pergunta. O texto é curto, o estilo é claro e o tema segue atual: o que significa dizer a verdade a quem tem poder sobre nós, e até onde vai a coragem de quem pensa diferente da maioria."},
   edicoes:[
     {nome:"Edipro", sym:"", img:"https://m.media-amazon.com/images/I/61-2MFPstpL._SL1422_.jpg",
      ed:"Edipro, 2019, edição de bolso. Tradução de Edson Bini. Origem da tradução e notas em conferência.",
      sobre:"Edição de bolso da Edipro (2019), com 80 páginas. Tradução de Edson Bini. A indicação de origem da tradução e a presença de notas ainda estão em conferência.",
      links:{bolso:"https://www.amazon.com.br/dp/8552100665?tag=acidadela-20"}},
     {nome:"Vozes de Bolso", sym:"",
      img:"https://m.media-amazon.com/images/I/51k7oEE0GZL._SL1000_.jpg",
      ed:"Vozes de Bolso, 1ª edição, 56 páginas. Tradução de Márcio Mauá Chaves Ferreira. Origem da tradução em conferência.",
      sobre:"Edição de bolso da Vozes de Bolso, com 56 páginas e tradução de Márcio Mauá Chaves Ferreira. A língua de origem ainda está em conferência.",
      links:{simples:"https://www.amazon.com.br/dp/8532664377?tag=acidadela-20"}},
     {nome:"Nova Fronteira", sym:"",
      img:"https://m.media-amazon.com/images/I/91YGPexFSML._SL1500_.jpg",
      ed:"Nova Fronteira, 133 páginas. Tradução de Maria Lacerda de Moura, com tradução e apêndice de Gisele Garcia. Origem da tradução em conferência.",
      sobre:"Edição digital da Nova Fronteira, na coleção Clássicos para Todos. A língua de origem ainda está em conferência.",
      links:{kindle:"https://www.amazon.com.br/dp/B07XRJ8CY5?tag=acidadela-20"}}
   ]},
  {t:"Ética a Nicômaco", a:"Aristóteles (384–322 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega"},
  {t:"Política", a:"Aristóteles (384–322 a.C.)", e:"antig", s:"PD", esc:"Filosofia grega"},
  {t:"Carta a Meneceu", a:"Epicuro (341–270 a.C.)", e:"antig", s:"PD", esc:"Epicurismo"},
  {t:"O Manual", a:"Epicteto (c. 55–135)", e:"antig", s:"PD", esc:"Estoicismo", leitura:"Texto em inglês, Project Gutenberg"},
  {t:"Meditações", a:"Marco Aurélio (121–180)", e:"antig", s:"PD", esc:"Estoicismo", leitura:"Texto em inglês, Project Gutenberg (tradução de Long)"},
  {t:"Cartas a Lucílio", a:"Sêneca (c. 4 a.C.–65)", e:"antig", s:"PD", esc:"Estoicismo"},
  {t:"Dos Deveres", a:"Cícero (106–43 a.C.)", e:"antig", s:"PD", esc:"Política romana"},
  // Idade Média e mundo islâmico
  {t:"Confissões", a:"Agostinho (354–430)", e:"medio", s:"PD", esc:"Escolástica"},
  {t:"A Cidade de Deus", a:"Agostinho (354–430)", e:"medio", s:"PD", esc:"Escolástica"},
  {t:"Suma Teológica (trechos)", a:"Tomás de Aquino (1225–1274)", e:"medio", s:"PD", esc:"Escolástica"},
  {t:"A Cidade Virtuosa", a:"Al-Farabi (c. 872–950)", e:"medio", s:"PD", esc:"Filosofia islâmica"},
  // Renascimento e política moderna
  {t:"O Príncipe", a:"Maquiavel (1469–1527)", e:"renasc", s:"PD", esc:"Realismo político", leitura:"Texto em inglês, Project Gutenberg"},
  {t:"Utopia", a:"Thomas More (1478–1535)", e:"renasc", s:"PD", esc:"Utopia"},
  {t:"Discurso da Servidão Voluntária", a:"Étienne de La Boétie (1530–1563)", e:"renasc", s:"PD", esc:"Servidão voluntária"},
  // Iluminismo e contrato
  {t:"Leviatã", a:"Thomas Hobbes (1588–1679)", e:"ilum", s:"PD", esc:"Contratualismo"},
  {t:"Segundo Tratado sobre o Governo", a:"John Locke (1632–1704)", e:"ilum", s:"PD", esc:"Contratualismo"},
  {t:"Do Contrato Social", a:"Jean-Jacques Rousseau (1712–1778)", e:"ilum", s:"PD", esc:"Contratualismo"},
  {t:"Do Espírito das Leis", a:"Montesquieu (1689–1755)", e:"ilum", s:"PD", esc:"Iluminismo"},
  {t:"Cândido", a:"Voltaire (1694–1778)", e:"ilum", s:"PD", esc:"Iluminismo"},
  {t:"O que é esclarecimento?", a:"Immanuel Kant (1724–1804)", e:"ilum", s:"PD", esc:"Iluminismo"},
  {t:"Reflexões sobre a Revolução em França", a:"Edmund Burke (1729–1797)", e:"ilum", s:"PD", esc:"Tradição conservadora"},
  // Liberalismo clássico
  {t:"A Riqueza das Nações", a:"Adam Smith (1723–1790)", e:"liberal", s:"PD", esc:"Economia clássica"},
  {t:"A Lei", a:"Frédéric Bastiat (1801–1850)", e:"liberal", s:"PD", esc:"Economia clássica"},
  {t:"A Democracia na América", a:"Alexis de Tocqueville (1805–1859)", e:"liberal", s:"PD", esc:"Liberalismo clássico"},
  {t:"Sobre a Liberdade", a:"John Stuart Mill (1806–1873)", e:"liberal", s:"PD", esc:"Liberalismo clássico"},
  {t:"Desobediência Civil", a:"Henry David Thoreau (1817–1862)", e:"liberal", s:"PD", esc:"Desobediência civil", leitura:"Texto em inglês, Project Gutenberg"},
  {t:"A Arte de Ter Razão", a:"Arthur Schopenhauer (1788–1860)", e:"liberal", s:"PD", esc:"Pessimismo e ética"},
  // Século XIX
  {t:"Fenomenologia do Espírito", a:"G. W. F. Hegel (1770–1831)", e:"xix", s:"PD", esc:"Idealismo"},
  {t:"Manifesto do Partido Comunista", a:"Karl Marx e Friedrich Engels", e:"xix", s:"PD", esc:"Socialismo"},
  {t:"Temor e Tremor", a:"Søren Kierkegaard (1813–1855)", e:"xix", s:"PD", esc:"Existencialismo precoce"},
  {t:"Genealogia da Moral", a:"Friedrich Nietzsche (1844–1900)", e:"xix", s:"PD", esc:"Crítica da moral"},
  {t:"Psicologia das Multidões", a:"Gustave Le Bon (1841–1931)", e:"xix", s:"PD", esc:"Psicologia social"},
  {t:"Ciência e Política como Vocação", a:"Max Weber (1864–1920)", e:"xix", s:"PD", esc:"Sociologia"},
  // Século XX e Brasil
  {t:"Ação Humana", a:"Ludwig von Mises (1881–1973)", e:"xx", s:"P", d:"2044", esc:"Escola austríaca"},
  {t:"O Caminho da Servidão", a:"Friedrich Hayek (1899–1992)", e:"xx", s:"P", d:"2063", esc:"Escola austríaca"},
  {t:"Origens do Totalitarismo", a:"Hannah Arendt (1906–1975)", e:"xx", s:"P", d:"2046", esc:"Totalitarismo"},
  {t:"1984", a:"George Orwell (1903–1950)", e:"xx", s:"PD", d:"2021", esc:"Totalitarismo"},
  {t:"Admirável Mundo Novo", a:"Aldous Huxley (1894–1963)", e:"xx", s:"P", d:"2034", esc:"Totalitarismo"},
  {t:"A Sociedade Aberta e seus Inimigos", a:"Karl Popper (1902–1994)", e:"xx", s:"P", d:"2065", esc:"Liberalismo crítico"},
  {t:"O Ópio dos Intelectuais", a:"Raymond Aron (1905–1983)", e:"xx", s:"P", d:"2054", esc:"Liberalismo crítico"},
  {t:"Casa-Grande & Senzala", a:"Gilberto Freyre (1900–1987)", e:"xx", s:"P", d:"2058", esc:"Pensamento brasileiro"},
  {t:"Raízes do Brasil", a:"Sérgio Buarque de Holanda (1902–1982)", e:"xx", s:"P", d:"2053", esc:"Pensamento brasileiro"},
  {t:"O Povo Brasileiro", a:"Darcy Ribeiro (1922–1997)", e:"xx", s:"P", d:"2068", esc:"Pensamento brasileiro"},
];

// Formatos de edição, na ordem em que aparecem na página da obra
const FORMATOS = [
  {k:"simples", rotulo:"Capa simples"},
  {k:"dura", rotulo:"Capa dura"},
  {k:"kindle", rotulo:"Kindle"},
  {k:"bolso", rotulo:"Bolso"},
];

// Identificador da página da obra (ex.: "A República" -> "a-republica")
function slugObra(t){
  return t.normalize("NFD").replace(/[̀-ͯ]/g,"")
    .toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
}
OBRAS.forEach(o => {
  o.slug = slugObra(o.t);
  // Obras com uma edição usam os campos ed/sym/links; obras com várias usam edicoes[]
  if(!o.edicoes){
    o.edicoes = o.ed ? [{nome:"", sym:o.sym||"", ed:o.ed, sobre:"", links:o.links||{}}] : [];
  }
});

function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}

/* Marcas de cada edição, escritas por extenso para que se entendam sem legenda */
const MARCAS = {
  "◆": {rotulo:"Traduzida do original", classe:"m-orig"},
  "◇": {rotulo:"Traduzida de outra língua", classe:"m-outra"},
  "✎": {rotulo:"Com notas ou introdução", classe:"m-notas"}
};
function marcasHTML(sym){
  if(!sym) return "";
  return [...sym].filter(c=>MARCAS[c]).map(c=>`<span class="etiq ${MARCAS[c].classe}">${esc(MARCAS[c].rotulo)}</span>`).join("");
}

/* ---------- Obras com resumo e edições conferidas (lote a lote) ----------
   picks: [formato, ASIN, código da capa, editora, páginas, marca (◆ ◇ ✎ ou ""), observação]
   Só entram edições com dados verificados na página da Amazon.
   Formato que não aparece aqui é mostrado como "Não temos os detalhes". */
const EXTRA_OBRAS = {
  "Ética a Nicômaco": {
    sobre: "A Ética a Nicômaco é o tratado em que Aristóteles pergunta o que é uma vida boa e como alguém chega a ela. Ele parte de uma observação simples: todos querem a felicidade, mas divergem sobre o que ela seja. Para ele, a felicidade está numa atividade da alma conforme a virtude, e as virtudes se formam pelo hábito, pela escolha do meio-termo entre dois extremos e pela prática repetida.\n\nO livro também discute a amizade, o prazer, a justiça, a vontade e a sabedoria prática. O que o torna indispensável é o método: Aristóteles não impõe uma doutrina de cima, descreve como as pessoas realmente julgam o bem e testa as opiniões contra essas experiências. Ler a obra é aprender a pensar sobre conduta com precisão, sem fórmulas prontas.",
    picks: [
      ["simples","6555524065","61Sb1jtAmEL","Principis",256,"◆","Traduzida e adaptada do original em grego, conforme a ficha da edição."],
      ["simples","8572838813","61XlfMWYClL","Edipro",392,"","Tradutor: Edson Bini. A origem da tradução não foi conferida na ficha."],
      ["kindle","B084RDRNXD","81bIdruqFXL","Edipro",515,"","Versão digital da Edipro. A origem da tradução não foi conferida na ficha."],
      ["simples","8532666418","61gtvVGNAPL","Editora Vozes",256,"","Tradutor: Vinícius Chichurra. A origem da tradução não foi conferida na ficha."]
    ]
  },
  "Política": {
    sobre: "A Política é o tratado em que Aristóteles examina a cidade, a comunidade que, segundo ele, nasce da família e da aldeia e existe para realizar a vida boa. Ele descreve o ser humano como animal político, ou seja, feito para viver na pólis, e a partir daí analisa as formas de governo: monarquia, aristocracia e governo constitucional, cada uma com sua forma corrompida.\n\nO livro também trata da escravidão, da propriedade, da educação e da melhor constituição possível. Vale a leitura porque fixa o vocabulário com que ainda se discute quem deve governar, com que finalidade e sob que limites. Aristóteles não escreve um manifesto; ele pesa vantagens e riscos de cada regime, e isso treina a comparação cuidadosa.",
    picks: [
      ["simples","8552100355","71uFX2qb9rL","Edipro",352,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Carta a Meneceu": {
    sobre: "A Carta a Meneceu é o texto mais acessível de Epicuro: uma carta curta, escrita para um discípulo, que resume o caminho para uma vida feliz. Epicuro quer libertar o leitor de três medos que, segundo ele, estragam a existência: o medo dos deuses, o medo da morte e a incerteza sobre o que é realmente bom.\n\nA felicidade, para ele, é ausência de dor no corpo e de perturbação na alma, e se alcança com prudência, moderação dos desejos e amizade. A carta vale a leitura porque é breve e prática, e porque confronta a ideia comum de que prazer é excesso: Epicuro defende um prazer sóbrio e calmo, e explica por quê.",
    picks: [
      ["simples","6555523212","71vf32bzXIL","Principis",96,"◇","Traduzida do inglês, conforme a ficha da edição."]
    ]
  },
  "O Manual": {
    sobre: "O Manual, ou Enquirídio, é uma coletânea breve de conselhos de Epicteto, reunida por um discípulo, Arriano. Seu tema central é a distinção entre o que depende de nós (juízos, impulsos, escolhas) e o que não depende (corpo, bens, reputação, acontecimentos). Sofrimento, segundo ele, vem menos das coisas do que da opinião que fazemos delas.\n\nO texto é direto e prático: trata de como reagir a insultos, à perda, à doença e à morte, e de como agir com dignidade no dia a dia. Vale a leitura por ser curto e aplicável. Quem o lê de uma vez não extrai muito; quem o consulta em momentos de tensão encontra uma régua para separar o que pode mudar do que não pode.",
    picks: [
      ["simples","6556600334","61zkj3SiV4L","Edipro",96,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Meditações": {
    sobre: "As Meditações são as anotações privadas de Marco Aurélio, imperador romano, escritas em grego durante campanhas militares. Não foram pensadas para publicação: são lembretes a si mesmo sobre como agir, como aceitar a passagem do tempo e como lidar com a raiva, a ingratidão e o cansaço.\n\nO fio condutor é a razão, que ordena o mundo e que cada pessoa pode seguir ao cumprir o seu dever. Por ser fragmentado, o livro se lê aos pedaços, e isso ajuda: cada passagem é uma pergunta dirigida ao leitor sobre a própria conduta. A obra tem valor porque mostra um homem com grande poder tentando não se deixar governar pelas paixões.",
    picks: [
      ["simples","8552100916","612B0id4gNL","Edipro",160,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["dura","6583970252","71hpuks2EGL","Atlantis Editora",128,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Cartas a Lucílio": {
    sobre: "As Cartas a Lucílio são uma série de cento e vinte e quatro cartas que Sêneca escreveu a um amigo mais jovem, Lucílio, sobre temas como o uso do tempo, a amizade, o medo da morte e a vida filosófica como prática diária. Não são tratados sistemáticos: são conversas com um interlocutor concreto, com exemplos, anedotas e conselhos.\n\nO que torna a obra útil é justamente esse tom de companhia. Sêneca não se apresenta como mestre acima do leitor; mostra os próprios erros e as próprias dificuldades. A leitura de algumas cartas por vez ajuda a transformar a filosofia em hábito, e não apenas em teoria.",
    picks: [
      ["simples","8532652662","41JYZa5KSvL","Editora Vozes",160,"","Seleção de cartas, não a série completa. Tradutor não identificado na ficha."],
      ["dura","9723105365","61PdqXBvHUL","Fundação Calouste Gulbenkian",722,"","Edição integral na ficha, 7ª edição. Tradutor não identificado na ficha."]
    ]
  },
  "Dos Deveres": {
    sobre: "Dos Deveres, de Cícero, é um tratado escrito como carta ao filho, que estudava em Atenas. Cícero examina o que é honesto e o que é útil, e como agir quando os dois parecem entrar em conflito. Divide o tema em virtudes como sabedoria, justiça, coragem e moderação, e aplica essas virtudes à vida pública e à vida privada.\n\nA obra vale a leitura porque enfrenta uma questão que continua atual: o que fazer quando a vantagem pessoal ou de um grupo exige algo que a consciência condena. Cícero não resolve tudo, mas oferece critérios claros para pensar esses casos e uma linguagem sóbria para discuti-los.",
    picks: [
      ["simples","8552100649","51+OqVlfw2L","Edipro",160,"✎","Edição com um estudo apresentado por Altino Arante."]
    ]
  },
  "Confissões": {
    sobre: "As Confissões são a narrativa que Agostinho escreveu sobre a própria vida até a conversão ao cristianismo, em forma de longa oração dirigida a Deus. O livro acompanha a juventude do autor, a busca por verdade em várias filosofias, a relação com a mãe, a vida em Milão e o momento em que decide se converter.\n\nAlém da autobiografia, a obra tem partes filosóficas importantes sobre a memória, o tempo e a inquietação do coração humano. Foi uma das primeiras grandes narrativas da experiência interior no Ocidente. Vale a leitura para quem quer ver como um pensador antigo descreve a própria mudança de vida com rigor e sem se poupar.",
    picks: [
      ["simples","8582850476","91hlMYSrG7L","Penguin-Companhia",416,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["dura","6583970171","71LTFQOXbRL","Atlantis Editora",240,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "A Cidade de Deus": {
    sobre: "A Cidade de Deus foi escrita por Agostinho depois do saque de Roma em 410, quando muitos atribuíam a catástrofe ao abandono dos deuses antigos e à adoção do cristianismo. Agostinho responde a essa acusação e, ao fazê-lo, constrói uma visão ampla da história, dividida entre duas cidades: a terrena, movida pelo amor de si, e a celeste, movida pelo amor de Deus.\n\nO livro é extenso e desigual, e exige paciência. Ainda assim, é o ponto de partida de boa parte da filosofia política cristã e de discussões sobre o papel do Estado, da justiça e da paz. A leitura vale por mostrar como um argumento religioso se torna uma interpretação completa do poder e da história.",
    picks: [
      ["simples","8532600530","71FvmGwhFXL","Editora Vozes",440,"","Parte I (livros I a X), não a obra completa. Tradutor não identificado na ficha."],
      ["dura","8534955662","51RUAzKoyRL","Paulus Editora",528,"","Volume 50/2 da coleção. Tradutor não identificado na ficha."]
    ]
  }
};

Object.assign(EXTRA_OBRAS, {
  "Suma Teológica (trechos)": {
    sobre: "A Suma Teológica foi escrita por Tomás de Aquino entre 1265 e 1274 para ensinar a doutrina cristã de modo ordenado. Cada tema é tratado como uma sequência de questões: primeiro se apresentam objeções contrárias à posição do autor, depois a resposta, e por fim a solução das objeções. Deus, a criação, o ser humano, as virtudes, a lei e a graça são examinados nessa forma.\n\nO método é o que mais interessa ao leitor de hoje: obriga a formular a objeção mais forte antes de responder. A obra também mostra o esforço de conciliar a filosofia de Aristóteles com a fé cristã. Os trechos disponíveis na Amazon são de edições parciais; a edição completa tem mais de seis mil páginas.",
    picks: [
      ["simples","8584910441","41jSYbLThPL","Ecclesiae",764,"","Volume 1 da obra. Tradutor não identificado na ficha."],
      ["dura","6555042354","","Edições Loyola",6872,"","Coleção de 9 volumes, edição bilíngue, na ficha da editora. Capa ainda não conferida."]
    ]
  },
  "A Cidade Virtuosa": {
    sobre: "A Cidade Virtuosa, de Al-Farabi, filósofo do século X, descreve uma comunidade governada por um chefe que conhece a verdade e orienta os cidadãos para a felicidade. Al-Farabi compara a cidade a um corpo cujas partes cooperam para o bem do todo, e a partir dessa imagem classifica as cidades ignorantes, as corrompidas e as que apenas seguem o costume.\n\nO texto liga a política à filosofia de Platão e de Aristóteles e mostra como a tradição islâmica pensou a liderança e a virtude. Vale a leitura para quem quer comparar concepções de cidade ideal e entender que o debate sobre quem deve governar tem raízes muito além da Europa.",
    picks: [
      ["simples","6502369960","81vIC10NV9L","Editora Novens",188,"","Título na ficha: A Cidade Modelo. Tradutor não identificado na ficha."]
    ]
  },
  "O Príncipe": {
    sobre: "O Príncipe, de Maquiavel, foi escrito em 1513 e publicado postumamente, em 1532. É um manual para quem governa e quer conquistar e manter o poder. Maquiavel separa o que os homens fazem daquilo que deveriam fazer, examina o papel da fortuna e da virtude, discute se é melhor ser temido ou amado e analisa exemplos concretos, como o de César Bórgia.\n\nO livro é curto e desconfortável, porque descreve a política sem os enfeites morais que costumamos usar para falar dela. Vale a leitura por ser a base do pensamento político realista; ler com atenção também permite avaliar o custo dessa clareza e questionar as conclusões, em vez de aceitá-las ou rejeitá-las por reflexo.",
    picks: [
      ["simples","8563560034","81ff41K5JyL","Penguin-Companhia",176,"◆","Tradução direta do italiano, de Maurício Santana Dias, conforme a ficha da edição."],
      ["dura","6584956199","812BaW4MacL","Editora Garnier",96,"","Edição de luxo, conforme a ficha. Tradutor não identificado na ficha."],
      ["bolso","8572839046","81h4CdNxdgL","Edipro",96,"","Texto integral. Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Utopia": {
    sobre: "Utopia, de Thomas More, foi publicada em 1516 como um diálogo narrado por um viajante, Rafael Hitlodeu, que descreve uma ilha onde a propriedade é comum, o trabalho é dividido entre todos, há tolerância religiosa e pouco dinheiro. O livro também critica a Inglaterra da época, com seus cercamentos de terras e as execuções por pequenos furtos.\n\nFoi a obra que deu nome ao gênero utópico. O que a torna instigante é a ambiguidade: More não diz claramente se aprova o que descreve, e essa dúvida faz parte do texto. A leitura vale para pensar como uma sociedade imagina o melhor e como essas imagens servem para criticar o presente.",
    picks: [
      ["simples","6556600563","511WVt529fL","Edipro",112,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","655552202X","61wluuheorL","Principis",144,"◇","Texto integral traduzido do inglês, conforme a ficha da edição."]
    ]
  },
  "Discurso da Servidão Voluntária": {
    sobre: "O Discurso da Servidão Voluntária, de Étienne de La Boétie, foi escrito ainda jovem e publicado em 1576. O autor se pergunta por que tantos povos aceitam ser governados por um só homem, quando bastaria deixar de obedecer. Sua resposta é que a tirania se sustenta pelo hábito, pelos costumes e pelas recompensas oferecidas a quem serve, e que a libertação começa quando as pessoas retiram o próprio consentimento.\n\nO texto é curto, direto e continua incomodando porque pergunta menos sobre o tirano do que sobre quem obedece. Vale a leitura para examinar que pequenas adesões tornam possível o poder que depois se queixa de si mesmo.",
    picks: [
      ["simples","8544001416","911IfbLSmIL","Martin Claret",121,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["bolso","8572839976","81HTlCC5S8L","Edipro",80,"","Edição de bolso. Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Leviatã": {
    sobre: "O Leviatã, de Thomas Hobbes, foi publicado em 1651 e parte de uma hipótese: sem um poder comum, os homens vivem em estado de guerra de todos contra todos. Para escapar disso, cada pessoa abre mão de parte da liberdade e transfere a um soberano a autoridade para garantir a paz. O livro desenvolve essa ideia com um detalhamento sobre religião, leis e a natureza do poder.\n\nÉ um dos textos fundadores da teoria política moderna, e a figura do Estado como um corpo artificial que protege os súditos é uma de suas imagens mais conhecidas. Vale a leitura para pesar o preço da segurança e entender por que muitos pensadores posteriores partiram de Hobbes para defender ou criticar o poder absoluto.",
    picks: [
      ["simples","8572838961","71o7ylo4w7L","Edipro",616,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","8544000010","A194TdWrFJL","Martin Claret",544,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Segundo Tratado sobre o Governo": {
    sobre: "O Segundo Tratado sobre o Governo, de John Locke, foi publicado em 1689. Locke sustenta que as pessoas nascem com direitos à vida, à liberdade e à propriedade, e que o governo existe para protegê-los com o consentimento dos governados. Quando o governo trai essa confiança, o povo tem direito de resistir e substituí-lo.\n\nO livro é a base de boa parte do constitucionalismo liberal. Sua discussão sobre propriedade, limites do poder e separação de funções continua presente nos debates atuais. Vale a leitura para examinar argumentos que justificam o governo e, ao mesmo tempo, dizem até onde ele pode ir.",
    picks: [
      ["simples","8572838414","81p1ncwbFlL","Edipro",176,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","8572324941","51aN6tT5uoL","Martin Claret",176,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Do Contrato Social": {
    sobre: "Do Contrato Social, de Jean-Jacques Rousseau, foi publicado em 1762. A pergunta do livro é como formar uma sociedade em que as pessoas continuem livres enquanto obedecem às leis. Rousseau propõe que cada um se submeta à vontade geral, entendida como a vontade do corpo político voltada para o bem comum, de modo que obedecer à lei seja, no fundo, obedecer a si mesmo.\n\nO conceito de vontade geral é um dos mais debatidos da filosofia política, porque pode ser usado para defender a democracia direta e também formas autoritárias. Vale a leitura para entender os dois usos e para perceber como uma ideia pode ser apropriada em direções opostas.",
    picks: [
      ["simples","6555522275","81cv7FpsZoL","Principis",128,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","8572329374","917Aq6lTwnS","Martin Claret",141,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["bolso","8572839291","718SG3j1BOL","Edipro",128,"","Edição de bolso. Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  }
});

/* Aplica EXTRA_OBRAS: texto da obra e edições. Agrupa por editora e páginas,
   para que cada bloco de edição descreva uma única publicação. */
OBRAS.forEach(o=>{
  const x = EXTRA_OBRAS[o.t];
  if(!x) return;
  o.sobre = {obra: x.sobre};
  const grupos = new Map();
  x.picks.forEach(([f,asin,img,ed,pag,sym,obs])=>{
    const chave = ed+"|"+pag;
    if(!grupos.has(chave)) grupos.set(chave, {nome:ed, pag, sym:"", img, obs:[], links:{}});
    const g = grupos.get(chave);
    if(sym && !g.sym.includes(sym)) g.sym += (g.sym?" ":"") + sym;
    if(obs && !g.obs.includes(obs)) g.obs.push(obs);
    g.links[f] = "https://www.amazon.com.br/dp/"+asin+"?tag=acidadela-20";
  });
  o.edicoes = [...grupos.values()].map(g=>({
    nome: g.nome,
    sym: g.sym,
    img: g.img ? "https://m.media-amazon.com/images/I/"+g.img+"._SL1500_.jpg" : "",
    ed: g.nome+(g.pag?", "+g.pag+" páginas.":"."),
    sobre: g.obs.join(" "),
    links: g.links
  }));
});
