const hobbies = [
  ["Chess", "Photography", "Movies", "Hiking"],
  ["Reading", "Gaming", "Traveling", "Coding"],
  ["Art", "Music", "Writing", "Yoga"],
];

const imagePath = [
  "rainbow",
  "brussels1",
  "brussels2",
  "farm",
  "stonehenge1",
  "stonehenge2",
];

const Swiper = ({ containerRef }) => {
  return (
    <div ref={containerRef} className="flex overflow-x-auto space-x-4 p-4">
      {imagePath.map((image) => (
        <img src={`/${image}.webp`} alt={image} />
      ))}
    </div>
  );
};

export default Swiper;
