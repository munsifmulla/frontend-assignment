import PostCard from "./components/PostCard/index";
import { checkCoordinatesDistance } from "./utils";

// Task 1: Form the photo/video layout based on the available resources from `props.data.resources` (Refer notion link)

// Task 2: Show the distance of the post from the user’s location
// 1. Create a custom hook to find user's location (ask for GPS permission)
// 2. Coordinates of each post is available in the `props.data.location` (Format:- coordinates:[longitude, latitude])
// 3. Supply both the latitude and longitude to checkCoordinatesDistance() util function to get the distance in kilometers

// These are hardcoded coordinates of Jaipur and Lucknow.
const lat1 = 26.9124; // replace with user latitude
const lon1 = 75.7873; // replace with user longitude
const lat2 = 26.8467; // replace with post latitude
const lon2 = 80.9462; // replace with post longitude
export default function Post(props) {
  const distance = checkCoordinatesDistance(lat1, lon1, lat2, lon2);
  const milk = props.data.highestMilk
    ? props.data.highestMilk
    : props.data.currentMilk;
  const tel = `tel:${props.data.contact}`;
  return (
    <PostCard>
      <PostCard.Resources>
        <PostCard.Image
          src={JSON.parse(props.data.resources[0]).url}
          resource={JSON.parse(props.data.resources[0])}
        />
      </PostCard.Resources>
      <PostCard.Group>
        <PostCard.Date>
          <span className="bolded">{`${parseInt(distance)} KM`}</span> from your
          location
        </PostCard.Date>
        <PostCard.Location>
          {props.data.locationName.split(",")[0]},{" "}
          {props.data.locationName.split(",")[1]}
        </PostCard.Location>
      </PostCard.Group>
      <PostCard.Group padding="20">
        <PostCard.PostHeading>
          {`${props.data.breed} ${props.data.animalType}`}
        </PostCard.PostHeading>
        <PostCard.Price>{`Rs. ${props.data.price}`}</PostCard.Price>
      </PostCard.Group>
      <PostCard.PostDescription>{`This is a ${props.data.gender} ${props.data.breed} ${props.data.animalType} which can provide upto ${milk} litres of milk on a daily basis `}</PostCard.PostDescription>
      <PostCard.Group padding="30">
        <PostCard.PostHeading>{props.data.seller}</PostCard.PostHeading>
        <PostCard.CallButton
          href={tel}
          src="https://static-assets.animall.in/static/images/call-card.png"
        ></PostCard.CallButton>
      </PostCard.Group>
    </PostCard>
  );
}
