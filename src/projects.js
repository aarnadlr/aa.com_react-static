
// images array:
// const images = [
//   // 0
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/ibm/IBM-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/patagonia-ww3.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/motet3b.jpg',
//   'http://ww3.aaronadler.com/assets/img/tradewind/Tradewind-800x400.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/verbal4.jpg',
//   // 5
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/youtubezero3-rect.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/google-play-17-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/daftpunk-320.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/cotton-bur-rect.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arss.gif',
//   // ^^^ 10
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/moic3.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arthritis-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/facebook-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/sweeps-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/wind-rect.jpg',
//   // ^^^ 15
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arcteryx2.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/curb-your.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/ski-nyc.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/thumbs2-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/noah-rect.jpg',
//   // ^^^ 20
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/holiday-rect2.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/lincoln-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/hail-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/guinness-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/lgc-rect.jpg',
//   // ^^^ 25
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/snickers-rect.jpg',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/hermes-rev.gif',
//   'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/absolut-rect.jpg',
//   // 28 TOTAL
// ];


const projects = [
  {
    key: 1,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/ibm/IBM-rect.jpg',
    // image: require('./images/ibm.png'),
    title: 'IBM Partners',
    desc: "UI design and prototype development for IBM Partners, IBM's business services portal. Click to view the project.",

    role: "UX wireframes, UI design, and client-side components such as a CSS3 sticky header and incrementing data counts using javascript.",

    // techstack: ""
    // TAGS:
    tag1: 'Sketch',
    tag2: 'html5',
    tag3: 'css3',
    tag4: 'javascript',
        // HREF LINK
    link: "./ibm.html"
  },
  {
    key: 2,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/patagonia-ww3.gif',
    title: 'Patagonia Provisions',
     desc: "Animated sequence for Patagonia Provisions, Patagonia's line of foods and recipes. Click to view.",

     role: "Created the Provisions design artwork in Pshop/Illustrator, based on brand assets. Animated the assets in After Effects. Rendered to JSON and implemented into a codebase.",
    // TAGS:
    //  tag1: 'sketch',
    //  tag2: 'CSS3',
     tag1: 'after effects',
     tag2: 'javascript',
     tag3: 'lottie',
     tag4: 'illustrator',
     tag5: 'svg',
         // HREF LINK
    link: "https://codepen.io/aaronadler/pen/vWoVoN"
  },
  {
    key: 3,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/motet3b.jpg',
    title: 'Motet - Music App UI',
     desc: 'Mobile music app with a minimal graphic interface. Light scheme to contrast against Spotify. Click to view.',

     role: "Created the brand identity with Pshop/Illustrator. UI design of all screens at 1x with Sketch.",
    // TAGS:
     tag1: 'sketch',
     tag2: 'illustrator',
     tag3: 'photoshop',
     tag4: 'svg',
         // HREF LINK
    link: "https://www.behance.net/gallery/60987045/Motet-Music-Application-Identity-and-UI-Design"
  },
  {
    key: 4,
    image: 'https://ww3.aaronadler.com/assets/img/tradewind/Tradewind-800x400.gif',
    title: 'Tradewind Markets - Blockchain platform',
     desc: "Designed, built and coded Tradewind's web presence, as well as a coded animated logo treatment.",

     role: "Coded the entire site using HTML5, CSS3, Flexbox, Sass, Javascript and Gulp. Animated the logo with Greensock/GSAP TweenMax. Handed off to client for deployment.",
    // TAGS:
    //  tag1: 'sketch',
     tag1: 'html5',
     tag2: 'css3',
     tag3: 'javascript',
     tag4: 'gulp',
    //  tag6: 'sass/scss',
    //  tag7: 'svg',
         // HREF LINK
    link: "https://www.behance.net/gallery/63693141/Tradewind-Markets-Blockchain-Technology-Website"
  },
  {
    key: 5,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/verbal4.jpg',
    title: 'Verbal - Messaging UI',
     desc: 'Single-purpose messaging app without marketplaces, ads, or other add-ons to encourage usage. Click to view.',

     role: "Created the brand identity with Pshop/Illustrator. UI design of all screens at 1x with Sketch.",
    // TAGS:
     tag1: 'sketch',
     tag2: 'illustrator',
     tag3: 'photoshop',
     tag4: 'svg',
    // HREF LINK
    link: "https://www.behance.net/gallery/61048837/Verbal-Messaging-App-Brand-Identity-and-UI-Design"
  },
  {
    key: 6,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/youtubezero3-rect.gif',
    title: 'YouTube Zero',
     desc: 'React application providing a zero-click YouTube search interface. Uses YouTube DataAPI v3. Click to view.',

     role: "tba",
    // TAGS:
     tag1: 'React',
     tag2: 'CSS3',
     tag3: 'javascript',
     tag4: 'youtube api',
         // HREF LINK
    link: "https://youtubezero.herokuapp.com/"
  },
  {
    key: 7,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/google-play-17-rect.jpg',
    title: 'Google Play',
     desc: 'Campaign concept and design to promote movies, music and book titles on Google Play. Click to view.',

     role: "tba",
    // TAGS:
     tag1: 'sketch',
     tag2: 'illustrator',
     tag3: 'photoshop',
     tag4: 'svg',
    //  tag5: 'bodymovin',
    //  tag6: 'illustrator',
    //  tag7: '',
    // HREF LINK
    link: "https://dribbble.com/shots/3939152-Google-Play-All-Together-Beauty"
  },
  {
    key: 8,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/daftpunk-320.gif',
    title: 'Daft Punk - Facebook Camera Effect AR',
     desc: 'The Daft Punk Helmet as a wearable Camera Effect. Click to view the video and experience the Camera Effect on mobile.',

     role: "tba",
    // TAGS:
     tag1: 'ARStudio',
     tag2: 'blender3D',
     tag3: 'photoshop',
     tag4: 'aftereffects',
     // HREF LINK
     link: "https://www.facebook.com/160758384681784/videos/166745714083051"
  },
  {
    key: 9,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/cotton-bur-rect.gif',
    title: "Cotton Bureau",
     desc: 'Animated logo lockup for Cotton Bureau. Created in AfterEffects and converted to JSON via Lottie. Click to view on Codepen.',

     role: "tba",
    // TAGS:
     tag1: 'illustrator',
     tag2: 'aftereffects',
     tag3: 'javascript',
     tag4: 'lottie',
     // HREF LINK
     link: "https://codepen.io/aaronadler/pen/OzLYYM"
  },
  {
    key: 10,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arss.gif',
    title: 'ARsocialstudio',
     desc: 'ARss is a microservice to build and deploy 3D Facebook Camera Effects for clients. 3D modeling, scripting and publication to the Camera Effects Platform. Click to view site.',

     role: "tba",
    // TAGS:
     tag1: 'html5',
     tag2: 'css3',
     tag3: 'javascript',
     tag4: 'gulp',
     // HREF LINK
     link: "https://thearss.com/"
  },
  {
    key: 11,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/moic3.gif',
    title: 'Museum of Ice Cream - Facebook Camera Effect',
     desc: 'Interactive AR 3D-based Facebook Camera Effect for the Museum of Ice Cream. Click to view the video and Camera Effect on your mobile device.',

     role: "tba",
    // TAGS:
     tag1: 'ARStudio',
     tag2: 'blender3D',
     tag3: 'Photoshop',
     tag4: 'aftereffects',
      // HREF LINK
      link: "https://www.facebook.com/160758384681784/videos/162009941223295/"
  },
  {
    key: 12,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arthritis-rect.jpg',
    title: 'Arthritis Foundation',
     desc: 'Graphic to promote awareness for the Arthritis Foundation. Click to view.',

     role: "tba",
    // TAGS:
     tag1: 'sketch',
     tag2: 'illustrator',
     tag3: 'svg',
     tag4: 'photoshop',
      // HREF LINK
    link: "https://dribbble.com/shots/3998425-Arthritis-Foundation-graphic"
  },
  {
    key: 13,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/facebook-rect.jpg',
    title: 'Facebook "Stay Close"',
     desc: 'Creative concept and design to promote Facebook Stories. Click to view.',

     role: "tba",
    // TAGS:
     tag1: 'sketch',
     tag2: 'illustrator',
     tag3: 'photoshop',
     tag4: 'svg',
     // HREF LINK
     link: "https://dribbble.com/shots/3440241-Facebook-Stories-Silicon-Valley"
  },
  {
    key: 14,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/sweeps-rect.jpg',
    title: 'Fedex "Sweeps"',
     desc: 'Creative concept to promote FedEx small business services. Agency: BBDO New York. Click to view.',

     role: "tba",

    // TAGS:
     tag1: 'concept',
     tag2: 'film/tv',
     tag3: 'art direction',
     tag4: 'creative',
      // HREF LINK
      link: "https://vimeo.com/8253231"
  },
  {
    key: 15,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/wind-rect.jpg',
    title: 'Fox Sports "Wind"',
     desc: 'Creative concept to promote the NBA on Fox Sports. Agency: Cliff Freeman & Partners. Click to view.',

     role: "tba",
    // TAGS:
    tag1: 'concept',
    tag2: 'film/tv',
    tag3: 'art direction',
    tag4: 'creative',
         // HREF LINK
         link: "https://vimeo.com/8285842"
  },
  {
    key: 16,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/arcteryx2.jpg',
    title: "Arc'Teryx",
     desc: "Animated lockup for outdoor equipment brand Arc'Teryx. Click to view.",

     role: "tba",
    // TAGS:
     tag1: 'illustrator',
     tag2: 'aftereffects',
     tag3: 'lottie',
     tag4: 'svg',
    // HREF LINK
    link: "https://dribbble.com/shots/3988978-Arc-Teryx-Animated-Lockup"

  },
  {
    key: 17,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/curb-your.gif',
    title: 'HBO "Curb Your Enthusiasm"',
     desc: "Graphic lockup and character illustration to promote HBO's Curb Your Enthusiasm Season 9. Click to view.",

     role: "tba",
    // TAGS:
    tag1: 'sketch',
    tag2: 'photoshop',
    tag3: 'illustrator',
    tag4: 'concept',
         // HREF LINK
         link: "https://dribbble.com/shots/3991223-HBO-Curb-Your-Enthusiasm-Season-9-Pret-ty-Good"
  },
  {
    key: 18,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/ski-nyc.gif',
    title: 'Ski NYC',
     desc: "Tribute to New York City winter. Click to view.",

     role: "tba",
    // TAGS:
    tag1: 'sketch',
    tag2: 'photoshop',
    tag3: 'illustrator',
    tag4: 'concept',
    // HREF LINK
    link: "https://dribbble.com/shots/3991227--SKI-NYC"
  },
  // {
  //   key: 19,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/thumbs2-rect.jpg',
  //   title: 'DirecTV "Thumbs"',
  //    desc: 'Creative concept to promote the breadth of DirecTV channels and services. Agency: BBDO New York',
  //   // TAGS:
  //   tag1: 'sketch',
  //   tag2: 'photoshop',
  //   tag3: 'illustrator',
  //   tag4: 'concept',
  //   // HREF LINK
  //   link: ""
  // },
  {
    key: 20,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/noah-rect.jpg',
    title: 'The Weather Channel "Noah"',
     desc: "Film to launch The Weather Channel's personalized weather feature on their mobile app. Agency: BBH New York",

     role: "tba",
    // TAGS:
    tag1: 'concept',
    tag2: 'film/tv',
    tag3: 'art direction',
    tag4: 'creative',
    // HREF LINK
    link: "https://vimeo.com/95035102"
  },
  // {
  //   key: 21,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/absolut-rect.jpg',
  //   title: 'Absolut Vodka "In An Absolut World"',
  //    desc: 'Creative concept for Absolut Vodka. Agency: TBWA Chiat New York',
  //   // TAGS:
  //   tag1: 'sketch',
  //   tag2: 'photoshop',
  //   tag3: 'illustrator',
  //   tag4: 'concept',
  //   // HREF LINK
  //   link: ""
  // },


  // {
  //   key:22,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/guinness-rect.jpg',
  //   title: 'Guinness "Good Things Come"',
  //    desc: 'Creative concept to promote Guinness. Agency: AMV BBDO London',
  //   // TAGS:
  //   tag1: 'sketch',
  //   tag2: 'photoshop',
  //   tag3: 'illustrator',
  //   tag4: 'concept',
  //        // HREF LINK
  //        link: ""
  // },


  // {
  //   key: 23,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/lgc-rect.jpg',
  //   title: 'London Graphic Centre',
  //    desc: 'Creative concept to promote London Graphic Centre paints. Agency: AMV BBDO London',
  //   // TAGS:
  //   tag1: 'sketch',
  //   tag2: 'photoshop',
  //   tag3: 'illustrator',
  //   tag4: 'concept',
  //   // HREF LINK
  //   link: ""
  // },


  // {
  //   key: 24,
  //   image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/snickers-rect.jpg',
  //   title: 'Snickers "What Are You Hungry For"',
  //    desc: 'Creative concept to promote Snickers partnership with the NFL. Agency: BBDO New York',
  //   // TAGS:
  //    tag1: 'sketch',
  //    tag2: 'photoshop',
  //    tag3: 'illustrator',
  //    tag4: 'concept',
  //     // HREF LINK
  //     link: ""
  // },


  {
    key: 25,
    image: 'https://s3.amazonaws.com/ww4-aa-com/img/ww3-aa/hermes-rev.gif',
    title: 'Hermés - HTML5 Remix',
     desc: 'A Codepen tribute to HTML5 via the Hermés logo. Created with Adobe After Effects and converted to JSON via Lottie/Bodymovin.',

     role: "tba",
    // TAGS:
     tag1: 'illustrator',
     tag2: 'aftereffects',
     tag3: 'lottie',
     tag4: 'svg',
     // HREF LINK
     link: ""
  }

]

export default projects;