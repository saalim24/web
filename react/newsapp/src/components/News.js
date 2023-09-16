import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class extends Component {
  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: null,
      title:
        "World Cup 2026: Could climate crisis impact the men's tournament?",
      description:
        "After a record-breaking summer of extreme temperatures in the US, BBC Sport looks at the possible impact on the 2026 World Cup.",
      url: "https://www.bbc.co.uk/sport/football/66211285",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3FF1/production/_130396361_gettyimages.jpg",
      publishedAt: "2023-09-15T05:05:08Z",
      content:
        'At the 1994 World Cup in the US, Republic of Ireland manager Jack Charlton memorably criticised Fifa\'s policy of not allowing drinks bottles on the pitch\r\n"One player is going to die."\r\nWith extreme … [+9537 chars]',
    },
    {
      source: { id: null, name: "Daily Beast" },
      author: "Jake Lahut",
      title: "GOP Presidential Campaigns Are Ghosting Key States",
      description:
        "Photo Illustration by Luis G. Rendon/Elizabeth Brockway/The Daily Beast/Reuters\r\nWelcome to Trail Mix, a fun but nutritious snack for your election news diet. See something interesting on the trail? Email me at jake.lahut@thedailybeast.com.This week, we dive …",
      url: "https://www.thedailybeast.com/gop-presidential-campaigns-are-ghosting-key-states",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1694742885/230914-trail-mix-campaign-ghost-towns-hero_ai8mxr",
      publishedAt: "2023-09-15T04:36:53Z",
      content:
        "Welcome to Trail Mix, a fun but nutritious snack for your election news diet. See something interesting on the trail? Email me at jake.lahut@thedailybeast.com.\r\nThis week, we dive into the disappeara… [+10826 chars]",
    },
    {
      source: { id: null, name: "The Atlantic" },
      author: "Alan Taylor",
      title: "Photos of the Week: Fish Face, Orca Kite, Naked Run",
      description:
        "A new volcanic eruption in Hawaii, deadly flooding in coastal Libya, a devastating earthquake in Morocco, scenes from China Fashion Week in Beijing, an end-of-summer cattle drive in Germany, and much more",
      url: "https://www.theatlantic.com/photo/2023/09/photos-of-the-week-fish-face-orca-kite-naked-run/675328/?utm_source=feed",
      urlToImage: null,
      publishedAt: "2023-09-15T04:30:00Z",
      content:
        "A new volcanic eruption in Hawaii, deadly flooding in coastal Libya, a devastating earthquake in Morocco, scenes from China Fashion Week in Beijing, a tunnel deep underground in Germany, wheelchair b… [+110 chars]",
    },
    {
      source: { id: null, name: "Faz.net" },
      author: "Christopher Meltzer",
      title:
        "Basketball-Weltmeister Andreas Obst über das Geheimnis einer guten Mannschaft",
      description:
        "Mit dem Basketball-Nationalteam wurde Andreas Obst sensationell Weltmeister. Im Interview spricht er über das Spiel seines Lebens gegen die USA, das Geheimnis einer guten Mannschaft – und die Wirkung von Trainer Gordon Herbert.",
      url: "https://www.faz.net/aktuell/sport/mehr-sport/sieg-bei-basketball-wm-andreas-obst-ueber-das-spiel-seines-lebens-19174718.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/aktuell/974731454/1.9174717/facebook_teaser_fplus/oh-mein-gott-passiert-das.jpg",
      publishedAt: "2023-09-15T04:28:48Z",
      content:
        "Herr Obst, wenn wir an die Basketball-Weltmeisterschaft denken, dann denken wir und wahrscheinlich nicht nur wir als Erstes an diesen einen Wurf. Sie ­wissen sicher, welchen wir meinen.\r\nIch kanns mi… [+455 chars]",
    },
    {
      source: { id: null, name: "Faz.net" },
      author: "Christopher Meltzer",
      title:
        "Basketball-Weltmeister Andreas Obst über das Geheimnis einer guten Mannschaft",
      description:
        "Mit dem Basketball-Nationalteam wurde Andreas Obst sensationell Weltmeister. Im Interview spricht er über das Spiel seines Lebens gegen die USA, das Geheimnis einer guten Mannschaft – und die Wirkung von Trainer Gordon Herbert.",
      url: "https://www.faz.net/aktuell/sport/mehr-sport/andreas-obst-im-interview-basketball-weltmeister-ueber-spiel-seines-lebens-19174718.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/aktuell/974731454/1.9174717/facebook_teaser_fplus/oh-mein-gott-passiert-das.jpg",
      publishedAt: "2023-09-15T04:28:48Z",
      content:
        "Herr Obst, wenn wir an die Basketball-Weltmeisterschaft denken, dann denken wir und wahrscheinlich nicht nur wir als Erstes an diesen einen Wurf. Sie ­wissen sicher, welchen wir meinen.\r\nIch kanns mi… [+455 chars]",
    },
    {
      source: { id: null, name: "Mundodeportivo.com" },
      author: "Antoni Canyameras Rojas",
      title:
        "Jordi Fernández: así camela a las estrellas NBA el currante que empezó como camarero",
      description:
        "Porque a veces los paralelismos se cruzan en Canadá, el país que vio nacer el padre que dio luz al baloncesto, James Naismith, forjó la primera medalla en un Mundial otro pionero nacido en una de las cunas del basket del globo con más tradición que Jordi Fern…",
      url: "https://www.mundodeportivo.com/baloncesto/nba/20230915/1002069442/jordi-fernandez-asi-camela-estrellas-nba-currante-empezo-camarero.html",
      urlToImage:
        "https://www.mundodeportivo.com/files/og_thumbnail/files/fp/uploads/2023/09/15/6503d8ee7e0be.r_d.247-149-24390.jpeg",
      publishedAt: "2023-09-15T04:17:23Z",
      content:
        "Porque a veces los paralelismos se cruzan en Canadá, el país que vio nacer el padre que dio luz al baloncesto, James Naismith, forjó la primera medalla en un Mundial otro pionero nacido en una de las… [+16680 chars]",
    },
    {
      source: { id: "the-jerusalem-post", name: "The Jerusalem Post" },
      author: "By JOSHUA HALICKMAN",
      title: "Tal Brody still very much on the map at 80",
      description:
        "Israeli-American hoops icon still passionate about promoting Holy Land – in sports and everything",
      url: "https://www.jpost.com/israel-news/sports/article-759188",
      urlToImage:
        "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/552767",
      publishedAt: "2023-09-15T03:00:04Z",
      content:
        "Tal Brody is one of the greatest players to ever don the Maccabi Tel Aviv uniform. From the New Jersey native’s on-court exploits, where he captained the yellow-and-blue to its maiden European title,… [+7102 chars]",
    },
    {
      source: { id: "breitbart-news", name: "Breitbart News" },
      author: "Lara Gwinn, Lara Gwinn",
      title:
        "Auburn Coach Hugh Freeze Baptizes Freshman Safety Sylvester Smith During Mass Worship Event",
      description:
        "Auburn football coach Hugh Freeze baptized freshman safety Sylvester Smith on Tuesday night after a worship service at Neville Arena that attracted thousands of people.",
      url: "https://www.breitbart.com/sports/2023/09/14/auburn-coach-hugh-freeze-baptizes-freshman-safety-sylvester-smith-during-mass-worship-event/",
      urlToImage:
        "https://media.breitbart.com/media/2023/09/GettyImages-1640921099-640x335.jpg",
      publishedAt: "2023-09-15T02:45:31Z",
      content:
        "Auburn football coach Hugh Freeze baptized freshman safety Sylvester Smith on Tuesday night after a worship service at Neville Arena that attracted thousands of people.\r\nThe Unite Auburn event featur… [+1640 chars]",
    },
    {
      source: { id: null, name: "STERN.de" },
      author: "STERN.de",
      title: "Adel: Der Schattenprinz: Daniel von Schweden wird 50",
      description:
        "Prinz Daniel hatte keinen leichten Start als Mann der schwedischen Kronprinzessin. Mittlerweile haben die Schweden ihn lieben gelernt. Doch auch an seinem 50. Geburtstag steht er etwas im Schatten.",
      url: "https://www.stern.de/lifestyle/leute/adel--der-schattenprinz--daniel-von-schweden-wird-50-33827150.html",
      urlToImage:
        "https://image.stern.de/33827152/t/Vt/v2/w1440/r1.7778/-/15--urnnewsmldpacom2009010123091499190649v3w800h600l135t186r1233b1084jpeg---6a611e8c7273d35a.jpg",
      publishedAt: "2023-09-15T02:33:51Z",
      content:
        "Prinz Daniel hatte keinen leichten Start als Mann der schwedischen Kronprinzessin. Mittlerweile haben die Schweden ihn lieben gelernt. Doch auch an seinem 50. Geburtstag steht er etwas im Schatten.\r\n… [+4695 chars]",
    },
    {
      source: { id: null, name: "Dominionpost.com" },
      author: "The Dominion Post, Morgantown, W.Va.",
      title:
        "From the coach's son to a coach himself, Blaine Stewart knows the importance of the Backyard Brawl",
      description:
        "Sep. 14—MORGANTOWN — On West Virginia's coaching staff, no one knows the Backyard Brawl better than first-year tight ends coach Blaine Stewart. Stewart, the son of former Mountaineer head coach Bill Stewart, grew up attending games between WVU and its bitter …",
      url: "https://www.dominionpost.com/2023/09/14/from-the-coachs-son-to-a-coach-himself-blaine-stewart-knows-the-importance-of-the-backyard-brawl/",
      urlToImage:
        "https://s.yimg.com/cv/apiv2/social/images/yahoo_default_logo-1200x1200.png",
      publishedAt: "2023-09-15T02:33:00Z",
      content:
        "Sep. 14MORGANTOWN On West Virginia's coaching staff, no one knows the Backyard Brawl better than first-year tight ends coach Blaine Stewart.\r\nStewart, the son of former Mountaineer head coach Bill St… [+5470 chars]",
    },
    {
      source: { id: null, name: "Freitag.de" },
      author: "Günter Klein",
      title:
        "Leistung | Ein Hoch auf das Basketball-Team! Deutschlands Spitzensport siecht trotzdem dahin",
      description:
        "Weltmeister im Basketball, Vize-Weltmeister im Eishockey – warum Spitzensport „Made in Germany“ dennoch ein ernstes Problem hat und der DFB auf Tiktok-Pannenvideos setzen könnte Es gibt in Deutschland ein Institut für Generationenforschung, das hat gerade sei…",
      url: "https://www.freitag.de/autoren/guenter-klein/ein-hoch-auf-die-basketballer-deutschlands-spitzensport-siecht-trotzdem-dahin",
      urlToImage:
        "https://www.freitag.de/autoren/guenter-klein/ein-hoch-auf-die-basketballer-deutschlands-spitzensport-siecht-trotzdem-dahin/@@images/social_image",
      publishedAt: "2023-09-15T02:00:00Z",
      content:
        "Es gibt in Deutschland ein Institut für Generationenforschung, das hat gerade seine jüngste Erhebung vorgestellt und für den Sport Alarm ausgerufen: Er verliert an Bedeutung auf beiden Seiten, der ak… [+3230 chars]",
    },
    {
      source: { id: null, name: "New York Post" },
      author: "Jared Schwartz",
      title: "Liberty set sights on first WNBA title as postseason begins",
      description: "Now, the Liberty’s real season begins.",
      url: "https://nypost.com/2023/09/14/liberty-set-sights-on-first-wnba-title-as-postseason-begins/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2023/09/newspress-collage-qbhwp4k6t-1694741294436.jpg?quality=75&strip=all&1694726966&w=1024",
      publishedAt: "2023-09-15T01:43:43Z",
      content:
        "Only one thing matters now.\r\nNot the Libertys 32-8 regular-season record and No. 2-overall seeded nor its Commissioners Cup title over the Aces, the WNBAs other super team looming on the other side o… [+4416 chars]",
    },
    {
      source: { id: null, name: "The Denver Post" },
      author: "Mark Kiszla",
      title:
        "Kiszla: For his next trick, CU Buffs coach Deion Sanders could drive CSU football into oblivion",
      description:
        "“If we’re going to have to pay the players, college athletics that we've been used to will be obliterated. College athletics as we’ve known it will be gone within three years,” Chuck Neinas said.",
      url: "https://www.denverpost.com/2023/09/14/deion-sanders-chuck-neinas-buffs-college-football-jay-norvell-kiszla-column/",
      urlToImage:
        "https://www.denverpost.com/wp-content/uploads/2023/09/TDP-L-CU-NEBRASKA_DSC0366.jpg?w=1024&h=884",
      publishedAt: "2023-09-15T01:15:15Z",
      content:
        "While we loudly sing the praises of Deion Sanders as the miracle worker that has brought CU football back from the dead, has all the gold and glitz of Coach Prime blinded us to the imminent demise of… [+4279 chars]",
    },
    {
      source: { id: null, name: "HipHopDX" },
      author: "Bernadette Giacomazzo",
      title:
        "YK Osiris Accused Of ‘Scamming’ YouTuber Out Of $60K Basketball Debt",
      description:
        "YK Osiris has been called out by a popular influencer who claimed the former Def Jam star owes him a large amount of cash following a streak of failed bets.",
      url: "https://hiphopdx.com/news/yk-osiris-allegedly-scammed-youtuber",
      urlToImage:
        "https://static.hiphopdx.com/2023/09/yk-osiris-accused-of-scamming-youtuber-out-of-60k-basketball-debt-1200x675.jpg",
      publishedAt: "2023-09-15T00:00:53Z",
      content:
        "YK Osiris hasnt been having the best luck as of late, and things dont look to be getting any better as hes now been accused of scamming a YouTuber.\r\nJesser, a popular YouTuber best known for his gami… [+1927 chars]",
    },
    {
      source: { id: null, name: "Vulture" },
      author: "Jackson McHenry",
      title: "Rachel Bloom Sets Avoidance to Song in Death, Let Me Do My Show",
      description:
        "Theater Review: Rachel Bloom’s ‘Death, Let Me Do My Show’ is avoidance set to song, a show about the 2020 pandemic and a difficult birth that’s funny and exposed but not too exposed.",
      url: "http://www.vulture.com/2023/09/theater-review-rachel-bloom-death-let-me-do-my-show.html",
      urlToImage:
        "https://pyxis.nymag.com/v1/imgs/dbc/e5a/1c31c03fdbec835b19814fd251d23565b0-Rachel-Bloom-Death-Let-Me-Do-My-Show-Emi.1x.rsocial.w1200.jpg",
      publishedAt: "2023-09-15T00:00:02Z",
      content:
        "Rachel Bloom would rather be singing about trees that smell like semen. She enters the stage in a glittery silver pantsuit, basketball in hand, backed by the Space Jam theme, and announces that shes … [+7531 chars]",
    },
    {
      source: { id: null, name: "Rolling Stone" },
      author: "Ryan Bort",
      title:
        "Big Profits, Big Demands: The Looming Autoworker Strike, Explained",
      description:
        "UAW is preparing to strike against the Big Three automakers, seeking better pay and benefits as car companies rake in billions",
      url: "https://www.rollingstone.com/politics/politics-features/uaw-strike-what-autoworkers-demanding-explained-1234825337/",
      urlToImage:
        "https://www.rollingstone.com/wp-content/uploads/2023/09/shawn-fein-united-auto-workers-strike.jpg?w=1600&h=900&crop=1",
      publishedAt: "2023-09-15T00:00:00Z",
      content:
        "The United Auto Workers want the Big Three automakers to share the wealth. The powerful union is poised to strike at midnight on Thursday, when its current contracts expire, unless the companies meet… [+7929 chars]",
    },
  ];
  constructor() {
    super();
    console.log("hey");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines</h2>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    title="myTitle"
                    description="mydesc"
                    imgUrl="https://www.rollingstone.com/wp-content/uploads/2023/09/shawn-fein-united-auto-workers-strike.jpg?w=1600&h=900&crop=1"
                    newsUrl="TODO"
                  ></NewsItem>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
