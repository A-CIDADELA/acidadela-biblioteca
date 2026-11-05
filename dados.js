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

Object.assign(EXTRA_OBRAS, {
  "Do Espírito das Leis": {
    sobre: "Do Espírito das Leis, de Montesquieu, foi publicado em 1748 e examina como as leis se relacionam com o tipo de governo, com o clima, a religião, os costumes e a economia. Montesquieu distingue três formas de governo, república, monarquia e despotismo, e associa a cada uma um princípio que a sustenta: virtude, honra e medo, respectivamente.\n\nSua contribuição mais conhecida é a defesa da separação e do equilíbrio entre os poderes, como garantia contra o abuso. O livro vale a leitura porque mostra que a liberdade depende de instituições que limitem quem governa, e que as leis precisam ser pensadas à luz das condições reais de cada povo.",
    picks: [
      ["simples","6556601187","7182KzKdiuL","Edipro",768,"","Segunda edição na ficha. Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["dura","8544000355","81e1ziiKRhL","Martin Claret",883,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Cândido": {
    sobre: "Cândido, de Voltaire, foi publicado em 1759 como uma sátira. O jovem Cândido aprende com o mestre Pangloss que vivemos no melhor dos mundos possíveis, e a partir daí sua vida é uma sequência de desastres: guerras, naufrágios, perseguições religiosas e violências de todo tipo, em várias partes da Europa e da América.\n\nA ironia atinge o otimismo filosófico e a crença de que todo mal tem uma razão superior. O fim da história, com a recomendação de cultivar o próprio jardim, sugere uma resposta prática em vez de metafísica. Vale a leitura por ser curto, divertido e ainda útil para desconfiar de explicações que justificam qualquer sofrimento.",
    picks: [
      ["simples","8572839852","71KGubqsJ9L","Edipro",112,"","Título na ficha: Cândido ou O Otimismo. Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["dura","6586490448","71FCVFVJ2HL","Editora Antofágica",256,"","Título na ficha: Cândido, ou o Otimismo. Tradutor não identificado na ficha."]
    ]
  },
  "O que é esclarecimento?": {
    sobre: "O que é esclarecimento?, de Immanuel Kant, é um ensaio de 1784 que responde à pergunta do título. Para Kant, o esclarecimento é a saída do ser humano de uma menoridade que ele mesmo causa, isto é, a incapacidade de usar o próprio entendimento sem a orientação de outro. A divisa é a frase latina sapere aude, ouse saber.\n\nO texto distingue o uso público da razão, que deve ser livre, do uso privado, que pode ser submetido a regras. É um ensaio curto e fundamental para entender o que o Iluminismo queria: não apenas acumular conhecimento, mas formar pessoas capazes de pensar sem tutela.",
    picks: [
      ["kindle","B0BF7533W1","61k9G0ctHgL","Penguin-Companhia",118,"","Título na ficha: Resposta à pergunta: o que é esclarecimento. Tradutor não identificado na ficha."]
    ]
  },
  "Reflexões sobre a Revolução em França": {
    sobre: "Reflexões sobre a Revolução em França, de Edmund Burke, foi publicado em 1790, poucos meses depois do início da Revolução, e se tornou a base do pensamento conservador. Burke critica a ideia de que a sociedade possa ser reconstruída a partir de princípios abstratos e defende que as instituições são fruto de uma experiência acumulada ao longo de gerações.\n\nO livro não é uma defesa do privilégio por si só: Burke condena abusos e reconhece limites do antigo regime. O que propõe é cautela diante de reformas radicais que rompem com a herança. Vale a leitura para entender uma das grandes discussões entre tradição e mudança, que continua presente no debate político.",
    picks: [
      ["simples","8572838627","81wbLGW8rEL","Edipro",256,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["kindle","B0CBXQFVSH","71Ji87CJfOL","Vide Editorial",338,"","Versão digital da Vide Editorial, 4ª edição. Tradutor não identificado na ficha."]
    ]
  },
  "A Riqueza das Nações": {
    sobre: "A Riqueza das Nações, de Adam Smith, foi publicado em 1776 e é um dos textos fundadores da economia moderna. Smith pergunta de onde vem a riqueza de um país e responde que ela depende da divisão do trabalho, da acumulação de capital e da extensão do mercado. Explica como os preços naturais se formam, critica os monopólios e o mercantilismo e discute o papel das leis e dos impostos.\n\nA obra é mais rica do que a caricatura que se faz dela. Smith também analisa os efeitos morais do trabalho repetitivo e a importância de instituições justas. Vale a leitura para entender a origem das ideias econômicas com que ainda se discute mercado e Estado.",
    picks: [
      ["simples","8595071853","61YRMt79qlL","Vide Editorial",796,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["dura","6556600423","814j+g6I-WL","Edipro",928,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "A Lei": {
    sobre: "A Lei, de Frédéric Bastiat, foi publicada em 1850 como panfleto. Bastiat parte de uma pergunta prática: a que serve a lei? Sua resposta é que ela deve proteger o direito de cada um à vida, à liberdade e à propriedade. Quando a lei passa a retirar de uma pessoa o que é dela para dar a outra, Bastiat chama isso de saque legal, e argumenta que esse uso corrompe a própria sociedade.\n\nO texto é curto e claro, e oferece um critério simples para avaliar leis e políticas: perguntar quem ganha, quem perde e se a medida apenas torna visível o que já é de todos. Vale a leitura para quem quer discutir o papel do Estado com um argumento direto.",
    picks: [
      ["simples","6556600873","71ZxkRyP53L","Edipro",112,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["dura","6587200184","61IWKwzijIL","Folha",96,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "A Democracia na América": {
    sobre: "A Democracia na América, de Alexis de Tocqueville, foi publicado em duas partes, em 1835 e 1840, depois de uma viagem do autor aos Estados Unidos. Tocqueville observa a igualdade de condições, a vida de associações, o papel da religião e da imprensa e a descentralização local, e a partir disso pensa os riscos próprios da democracia.\n\nO mais citado de seus alertas é a tirania da maioria: um povo igual pode conformar-se a uma opinião dominante e sufocar a divergência sem recorrer à força. O livro vale a leitura porque descreve um regime democrático com atenção aos costumes, e não só às leis.",
    picks: [
      ["simples","8552100754","71SLqR0Og1L","Edipro",768,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Sobre a Liberdade": {
    sobre: "Sobre a Liberdade, de John Stuart Mill, foi publicado em 1859. O argumento central é o princípio do dano: a sociedade só pode limitar a liberdade de alguém para impedir que ele cause dano a outros, e não para impor o que considera melhor para essa pessoa. Mill defende a liberdade de pensamento, de expressão e de viver segundo a própria escolha, desde que não se prejudique terceiros.\n\nO livro também analisa a tirania da opinião pública, que pode pressionar pela conformidade sem precisar de leis. Vale a leitura por oferecer um critério claro para discutir limites da liberdade, um tema que continua atual em debates sobre expressão e intervenção do Estado.",
    picks: [
      ["simples","8525434191","71FHYdhM7aL","L&PM",176,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","8595070369","81mZkl7gHkL","Vide Editorial",204,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  }
});

Object.assign(EXTRA_OBRAS, {
  "Desobediência Civil": {
    sobre: "Desobediência Civil, de Henry David Thoreau, foi publicado em 1849, depois de uma noite na prisão por ter se recusado a pagar um imposto. Thoreau protestava contra a escravidão e contra a guerra com o México. Seu argumento é que a consciência individual não deve se submeter a leis injustas, e que o Estado, quando serve à injustiça, deixa de merecer obediência automática.\n\nO texto é a origem de uma longa tradição de resistência pacífica e de desobediência consciente. Vale a leitura para pensar quando a recusa pessoal a uma norma é legítima e quais são os custos de aceitá-la sem questionar.",
    picks: [
      ["simples","8572839682","712pKy63rsL","Edipro",80,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["bolso","8525406147","913HuHgvgjL","L&PM",96,"","Edição de bolso. Tradutor não identificado na ficha."]
    ]
  },
  "A Arte de Ter Razão": {
    sobre: "A Arte de Ter Razão, de Arthur Schopenhauer, foi publicada postumamente, em 1864. São trinta e oito estratagemas, isto é, truques retóricos que as pessoas usam em discussões para parecer vencedoras, mesmo quando não têm razão. Schopenhauer não ensina a vencer com honestidade; ensina a reconhecer as manobras que os outros usam.\n\nO texto é provocador e tem um tom cínico que o próprio autor assume. Vale a leitura porque treina a percepção de falácias e de pressões retóricas, útil em qualquer debate público ou privado.",
    picks: [
      ["simples","855210041X","61LkyHUdxyL","Edipro",80,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["bolso","8532655807","91yZvJ40FJL","Vozes de Bolso",64,"","Edição de bolso. Tradutor não identificado na ficha."]
    ]
  },
  "Fenomenologia do Espírito": {
    sobre: "A Fenomenologia do Espírito, de Hegel, foi publicada em 1807 e acompanha a trajetória da consciência desde a percepção mais simples até o saber absoluto. Cada forma de consciência revela a insuficiência de si mesma e leva à seguinte, num movimento em que a verdade aparece como processo, e não como algo dado de antemão. A passagem entre senhor e escravo é uma das mais conhecidas.\n\nÉ um livro difícil, com linguagem densa e trechos que exigem paciência. Vale a leitura para quem quer entender a origem de boa parte da filosofia posterior sobre liberdade, reconhecimento e história, e está disposto a ler com apoio de um guia.",
    picks: [
      ["simples","8532627692","51eB56zzgCL","Editora Vozes",552,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Manifesto do Partido Comunista": {
    sobre: "O Manifesto do Partido Comunista, escrito por Karl Marx e Friedrich Engels, foi publicado em 1848. Parte de uma tese: a história das sociedades é a história da luta de classes. Descreve o papel da burguesia na transformação da economia, a situação do proletariado e a crítica a outras correntes socialistas da época, e termina com um programa de medidas.\n\nTexto curto e de grande alcance, foi lido e usado de muitas maneiras ao longo do século XX. Vale a leitura para conhecer as origens de uma tradição política inteira e para avaliar, com o próprio texto nas mãos, as análises que faz do capitalismo de seu tempo.",
    picks: [
      ["simples","857283902X","81-4tDSbzFL","Edipro",112,"","Edição de bolso, texto integral. Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","8563560360","81hlatl7w+S","Penguin-Companhia",112,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Temor e Tremor": {
    sobre: "Temor e Tremor, de Søren Kierkegaard, foi publicado em 1843 sob o pseudônimo de Johannes de Silentio. O livro toma como ponto de partida o episódio bíblico em que Abraão se dispõe a sacrificar Isaac. A partir dele, o autor opõe a moral universal, que pode justificar o sacrifício com regras gerais, à fé, que exige uma relação pessoal e inexplicável com Deus.\n\nO texto é um dos clássicos da filosofia da religião e da ética, com uma prosa que se faz de perguntas. Vale a leitura para pensar os limites da razão e da moral diante de uma decisão que não pode ser justificada por outros.",
    picks: [
      ["simples","8528905918","610kHFajO9L","Hemus",128,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Genealogia da Moral": {
    sobre: "A Genealogia da Moral, de Friedrich Nietzsche, foi publicada em 1887, em três ensaios que investigam a origem dos valores morais. Nietzsche distingue a moral dos senhores, que chama de bom e ruim a partir da própria força, da moral dos escravos, que nasce do ressentimento e chama de mau o que é poderoso. Analisa também a culpa, a consciência e os ideais ascéticos.\n\nO livro é provocador e desconfortável, porque questiona a própria origem da moral que costumamos tomar como natural. Vale a leitura para examinar como os valores se formam historicamente e para avaliar as conclusões do autor com cuidado, já que ele mesmo as apresenta como hipóteses.",
    picks: [
      ["simples","852543678X","71HMLWZu-HL","L&PM",192,"","Título na ficha: Sobre a Genealogia da Moral. Tradutor não identificado na ficha."],
      ["bolso","8535914560","81Yf58pV9JL","Companhia de Bolso",176,"","Edição de bolso. Tradutor não identificado na ficha."]
    ]
  },
  "Psicologia das Multidões": {
    sobre: "Psicologia das Multidões, de Gustave Le Bon, foi publicado em 1895 e procura explicar como indivíduos se comportam quando estão reunidos. Le Bon sustenta que, na multidão, a razão se enfraquece, as emoções se propagam por contágio e as pessoas se tornam mais sugestionáveis, e que líderes hábeis podem explorar essa dinâmica.\n\nO livro teve enorme influência e foi usado por autores e movimentos de tendências muito diferentes. Vale a leitura com espírito crítico: as observações de Le Bon sobre a mobilização coletiva são úteis, mas suas generalizações e seu desprezo pelo povo devem ser avaliados com cuidado.",
    picks: [
      ["simples","8546902410","51IfZYXsJjL","WMF Martins Fontes",224,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Ciência e Política como Vocação": {
    sobre: "Ciência e Política como Vocação são duas conferências de Max Weber, proferidas em 1917 e 1919. Na segunda, Weber distingue a ética da convicção, que age segundo princípios, da ética da responsabilidade, que pesa as consequências da ação. Descreve o político como alguém que lida com a violência legítima do Estado e com os limites do possível.\n\nSão textos curtos e de grande atualidade para quem discute poder, ética e responsabilidade pública. Vale a leitura porque obriga a separar o que é boa intenção do que é boa decisão, e a assumir as consequências do que se defende.",
    picks: [
      ["simples","8544001009","81PkeV02dhL","Martin Claret",141,"","Título na ficha: Ciência e política: duas vocações. Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["simples","8532664466","51nMYW8k1FL","Editora Vozes",120,"","Título na ficha: Política como vocação e ofício. Tradutor não identificado na ficha."]
    ]
  }
});

Object.assign(EXTRA_OBRAS, {
  "Ação Humana": {
    sobre: "Ação Humana, de Ludwig von Mises, foi publicado em 1949 e é um tratado de economia construído a partir de um ponto de partida: toda ação humana é a escolha de meios para fins. Mises desenvolve a partir disso princípios sobre troca, moeda, preços e cálculo econômico, e argumenta contra a intervenção do Estado na economia.\n\nÉ uma das exposições mais sistemáticas da escola liberal austríaca e seu método é dedutivo: as conclusões seguem da premissa, e não de dados. Vale a leitura para confrontar um argumento completo a favor do mercado, mesmo para quem discorde de suas conclusões.",
    picks: [
      ["dura","6550520703","61MxLc9JQWL","LVM Editora",1020,"","Edição de 4ª ed. na ficha. Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "O Caminho da Servidão": {
    sobre: "O Caminho da Servidão, de Friedrich Hayek, foi publicado em 1944, durante a Segunda Guerra. Hayek argumenta que o planejamento central da economia, mesmo com boas intenções, tende a concentrar poder e a destruir as garantias da liberdade individual. Para ele, a passagem do planejamento econômico ao controle político não é um acidente, mas uma consequência lógica.\n\nO livro defende o Estado de direito e a competição de mercado como proteções contra essa trajetória. Vale a leitura para discutir até onde a intervenção do Estado é compatível com a liberdade e para examinar um dos argumentos liberais mais influentes do século XX.",
    picks: [
      ["simples","6586029724","61XgkB3IDBL","LVM Editora",344,"","Segunda edição, conforme a ficha. Tradutor não identificado na ficha. A origem da tradução não foi conferida."],
      ["kindle","B078JC2BS5","812oa3zkGFL","LVM Editora",234,"","Versão digital da LVM. Tradutor não identificado na ficha."]
    ]
  },
  "Origens do Totalitarismo": {
    sobre: "As Origens do Totalitarismo, de Hannah Arendt, foi publicado em 1951 e analisa três elementos que, segundo a autora, tornaram possível o totalitarismo: o antissemitismo, o imperialismo e a formação de massas atomizadas, sem laços sociais sólidos. Arendt examina o nazismo e o stalinismo como fenômenos novos, e não apenas como formas extremas de autoritarismo conhecido.\n\nO livro é denso e longo, mas indispensável para quem quer entender como ideologias e o terror transformam a política. Vale a leitura para pensar as condições que tornam uma sociedade vulnerável à propaganda e à destruição da pluralidade.",
    picks: [
      ["bolso","8535922040","91r9o0I0EcL","Companhia de Bolso",832,"","Edição de bolso. Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "1984": {
    sobre: "1984, de George Orwell, foi publicado em 1949 e descreve um regime totalitário em que o Partido controla a verdade ao controlar a linguagem, a memória e a história. O protagonista, Winston Smith, trabalha reescrevendo registros para que o passado acompanhe as mudanças de posição do Partido, e sua rebeldia começa com a vontade de pensar por conta própria.\n\nO romance é conhecido pelos conceitos de vigilância constante e de duplipensar, mas o que segue útil é a análise de como o poder se torna incontestável quando consegue definir o que é verdadeiro. Vale a leitura para perceber como a manipulação da linguagem e da informação pode atuar mesmo em sociedades que se dizem livres.",
    picks: [
      ["dura","6584956504","61hAKXNgRpL","Editora Garnier",224,"","Edição de luxo, conforme a ficha. Tradutor não identificado na ficha."],
      ["simples","8535914846","819js3EQwbL","Companhia das Letras",416,"","Tradução de Alexandre Hubner, conforme a ficha. A origem da tradução não foi conferida."],
      ["simples","6555522267","61t0bwt1s3L","Principis",336,"◆","Texto integral traduzido do original em inglês, conforme a ficha da edição."]
    ]
  },
  "Admirável Mundo Novo": {
    sobre: "Admirável Mundo Novo, de Aldous Huxley, foi publicado em 1932 e imagina uma sociedade estável, sem guerra nem miséria, em que o sofrimento foi eliminado por meio de condicionamento, consumo e prazeres fáceis. As pessoas são felizes à maneira que o sistema define, e a liberdade individual se perdeu sem que ninguém precisasse ser violentamente reprimido.\n\nO livro é o complemento de 1984, de Orwell: enquanto um imagina o controle pela dor, o outro imagina o controle pelo conforto. Vale a leitura para pensar se uma sociedade pode ser confortável e, ainda assim, ter perdido algo essencial.",
    picks: [
      ["dura","6558301660","71k2qwN6brL","Biblioteca Azul",304,"","Edição de luxo, conforme a ficha. Tradutor não identificado na ficha."],
      ["simples","8525056006","61hOp6UFvCL","Biblioteca Azul",312,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "A Sociedade Aberta e seus Inimigos": {
    sobre: "A Sociedade Aberta e seus Inimigos, de Karl Popper, foi publicado em 1945, durante a guerra, e critica as filosofias que pretendem prever e planejar o curso inteiro da história. Popper analisa Platão, Hegel e Marx como exemplos do que chama de historicismo, e defende uma sociedade aberta, em que as instituições permitam criticar e corrigir erros sem violência.\n\nO livro é extenso e polêmico, e algumas leituras de filósofos específicos são contestadas. Ainda assim, a ideia de reforma gradual e de falibilismo continua central para o debate sobre democracia e planejamento social. Vale a leitura para discutir os limites da previsão histórica e o valor da crítica pública.",
    picks: [
      ["simples","9724416593","61FDFOFZx4L","Edições 70",320,"","Edição portuguesa, conforme a ficha. Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "O Ópio dos Intelectuais": {
    sobre: "O Ópio dos Intelectuais, de Raymond Aron, foi publicado em 1955 e critica a atração que parte dos intelectuais franceses sentia pelo marxismo e por mitos revolucionários, mesmo diante de fatos que os contradiziam. Aron analisa essa adesão como uma forma de fé política que dispensa a verificação dos fatos.\n\nO texto é um exercício de responsabilidade intelectual: pede que quem pensa a política distinga o que quer ver do que realmente acontece. Vale a leitura para refletir sobre ideologia, crítica e o papel de quem opina publicamente sobre o mundo.",
    picks: [
      ["simples","8568493289","61-9ZEfGNCL","Três Estrelas",352,"","Tradutor não identificado na ficha. A origem da tradução não foi conferida."]
    ]
  },
  "Casa-Grande & Senzala": {
    sobre: "Casa-Grande & Senzala, de Gilberto Freyre, foi publicado em 1933 e interpreta a formação da sociedade brasileira a partir da família patriarcal, da economia açucareira, da escravidão e da mistura de povos. Freyre destacou a presença do português, do africano e do indígena na vida cotidiana, e ficou conhecido pela tese de uma convivência relativamente harmoniosa entre senhores e escravizados.\n\nA interpretação foi amplamente discutida, e críticos apontam que ela minimiza a violência do sistema escravista. Vale a leitura justamente por isso: é um clássico que deve ser lido com atenção aos argumentos e às omissões, e que abriu caminho para pensar a cultura brasileira de forma detalhada.",
    picks: [
      ["dura","6556125350","716nl8qQOrL","Global Editora",981,"","Edição de 53ª edição, conforme a ficha. Tradutor não aplicável; obra em português."],
      ["simples","8526008692","91pNT9IAIpL","Global Editora",728,"","Edição de 51ª edição, conforme a ficha."]
    ]
  },
  "Raízes do Brasil": {
    sobre: "Raízes do Brasil, de Sérgio Buarque de Holanda, foi publicado em 1936 e analisa as heranças que moldam a vida política e social brasileira. Entre elas estão o personalismo, a dificuldade de separar o público do privado e a tradição de relações pessoais que se sobrepõem às regras impessoais. O autor compara essa herança com a tradição protestante e a ética do trabalho.\n\nO livro é um dos principais esforços de entender o Brasil a partir de suas instituições e de seus hábitos. Vale a leitura para quem quer examinar por que as regras nem sempre valem para todos e como esse padrão se repete na vida pública.",
    picks: [
      ["simples","8535925481","91Tyq-pOAeL","Companhia das Letras",256,"","Tradutor não aplicável; obra em português."]
    ]
  },
  "O Povo Brasileiro": {
    sobre: "O Povo Brasileiro, de Darcy Ribeiro, foi publicado em 1995 e reúne as contribuições de indígenas, africanos e europeus na formação do povo brasileiro. Darcy analisa como a mistura desses povos, sob a dominação colonial e a escravidão, deu origem a uma população nova, e discute as desigualdades que atravessam essa história até o presente.\n\nO livro é uma síntese ampla e de linguagem acessível, escrita com a experiência de quem trabalhou com educação e com povos indígenas. Vale a leitura para entender a formação do país sob um ponto de vista que coloca a desigualdade no centro da análise.",
    picks: [
      ["simples","8526022253","A1lPmAv2hEL","Global Editora",368,"","Tradutor não aplicável; obra em português."]
    ]
  }
});

/* Recorte de capas em perspectiva (mockup 3D com sombra). Cada janela
   [largura original, altura original, x0, y0, x1, y1] delimita só a capa frontal,
   sem lombada e sem sombra, com proporção 2:3. Chave: URL da imagem.
   Imagens sem entrada aqui são exibidas inteiras, como antes. */
const RECORTES = {
  "https://m.media-amazon.com/images/I/71p9NTtFrzL._SL1500_.jpg": [1202,1500,325,112,1155,1357],
  "https://m.media-amazon.com/images/I/61-2MFPstpL._SL1422_.jpg": [1150,1422,248,100,1053,1308],
  "https://m.media-amazon.com/images/I/71hpuks2EGL._SL1500_.jpg": [1200,1200,216,60,888,1068],
  "https://m.media-amazon.com/images/I/71LTFQOXbRL._SL1500_.jpg": [1200,1200,216,72,888,1080],
  "https://m.media-amazon.com/images/I/814j+g6I-WL._SL1500_.jpg": [1224,1500,290,112,1100,1327],
  "https://m.media-amazon.com/images/I/511WVt529fL._SL1500_.jpg": [972,1200,250,144,874,1080],
  "https://m.media-amazon.com/images/I/71k2qwN6brL._SL1500_.jpg": [1188,1500,215,230,880,1228]
};

/* Devolve o estilo inline que aplica o recorte acima (ou vazio, se não houver recorte). */
function recorteStyle(src){
  const r = RECORTES[src];
  if(!r) return "";
  const [nw,nh,x0,y0,x1,y1] = r;
  const ww = x1-x0, hh = y1-y0;
  return `position:absolute;width:${(100*nw/ww).toFixed(3)}%;height:${(100*nh/hh).toFixed(3)}%;left:${(-100*x0/ww).toFixed(3)}%;top:${(-100*y0/hh).toFixed(3)}%;max-width:none`;
}

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
