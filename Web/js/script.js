if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote_portfolio", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática
  });

  new SimpleSlide({
    slide: "portfolio", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}
