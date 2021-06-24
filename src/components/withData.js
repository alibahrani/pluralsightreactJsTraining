function withData(maxSpeakersToShow) {
  return function (Component) {
    const speakers = [
      { imageSrc: "spekaer-1124", name: "Douglas Crockford" },
      { imageSrc: "spekaer-1530", name: "Tamara Bakr" },
      { imageSrc: "spekaer-10803", name: "Eugene Chuvyrov" },
    ];
    return function () {
      const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
      return <Component speaekrs={limitSpeakers}></Component>;
    };
  };
}

export default withData;
