function SpeakerRenderProps(props) {
  const speakers = [
    { imageSrc: "spekaer-1124", name: "Douglas Crockford" },
    { imageSrc: "spekaer-1530", name: "Tamara Bakr" },
    { imageSrc: "spekaer-10803", name: "Eugene Chuvyrov" },
  ];
  return props.children({
    speakers: speakers,
  });
}
export default SpeakerRenderProps;
