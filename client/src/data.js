import User1 from "./assests/face1.jpg";
import User2 from "./assests/face2.jpg";
import User3 from "./assests/face3.jpg";
import User4 from "./assests/face4.jpg";
import Post1 from "./assests/post/post (1).jpg";
import Post2 from "./assests/post/post (2).jpg";
import Post3 from "./assests/post/post (3).jpg";
import Post4 from "./assests/post/post (4).jpg";
import Post5 from "./assests/post/post (5).jpg";
import Post6 from "./assests/post/post (6).jpg";
import Post7 from "./assests/post/post (7).jpg";
import Post8 from "./assests/post/post (8).jpg";
const FriendsData = [
  {
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
  },
  {
    ProfilePicture: User1,
    Name: "Arthur Shelby",
  },
  {
    ProfilePicture: User2,
    Name: "Mike Ross",
  },
  {
    ProfilePicture: User3,
    Name: "Van Diesel",
  },
  {
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
  },
  {
    ProfilePicture: User1,
    Name: "Arthur Shelby",
  },
  {
    ProfilePicture: User2,
    Name: "Mike Ross",
  },
  {
    ProfilePicture: User3,
    Name: "Van Diesel",
  },
  {
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
  },
  {
    ProfilePicture: User1,
    Name: "Arthur Shelby",
  },
];
// Testing Feed before uploading real data from database
const FeedTest = [
  {
    postID: "1762DA",
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    username: "sarahtan_",
    PostContent: "Picnic Day ",
    PostImage: Post1,
    Likes: 22,
    comments: [
      {
        username: "sarahtan_",
        ProfilePicture: User4,
        comment: "What a view 🫣!!",
        Likes: 1,
      },
    ],
  },
  {
    postID: "1sdf2DA",
    ProfilePicture: User1,
    Name: "Arthur Shelby",
    PostContent: "External Hard Drive is Life 😎",
    PostImage: Post5,
    Likes: 32,
    username: "arthur.shel",
    comments: [
      {
        username: "arthur.shel",
        ProfilePicture: User1,
        comment: "Really Helpful 👌",
        Likes: 1,
      },
    ],
  },
  {
    postID: "1212DA",
    ProfilePicture: User2,
    Name: "Mike Ross",
    PostContent: "Nature Day",
    PostImage: Post3,
    username: "mike_rs",
    Likes: 764,
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
  {
    postID: "1762DA",
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    PostContent: "Picnic Day",
    PostImage: Post1,
    Likes: 22,
    username: "defaultusername",
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
  {
    postID: "1762DA",
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    PostContent: "Picnic Day",
    PostImage: Post2,
    username: "defaultusername",
    Likes: 22,
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
      {
        username: "arthur.shel",
        ProfilePicture: User1,
        comment: "Really Helpful 👌",
        Likes: 1,
      },
      {
        username: "sarahtan_",
        ProfilePicture: User4,
        comment: "What a view 🫣!!",
        Likes: 1,
      },
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
      {
        username: "arthur.shel",
        ProfilePicture: User1,
        comment: "Really Helpful 👌",
        Likes: 1,
      },
      {
        username: "sarahtan_",
        ProfilePicture: User4,
        comment: "What a view 🫣!!",
        Likes: 1,
      },
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
  {
    postID: "1762DA",
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    PostContent: "Picnic Day",
    PostImage: Post4,
    Likes: 22,
    username: "defaultusername",
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
  {
    postID: "1762DA",
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    PostContent: "Picnic Day",
    PostImage: Post6,
    Likes: 22,
    username: "defaultusername",
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
  {
    postID: "1762DA",
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    PostContent: "Picnic Day",
    PostImage: Post7,
    Likes: 22,
    username: "defaultusername",
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
  {
    postID: "1762DA",
    ProfilePicture: User2,
    Name: "Sarah Tancedi",
    PostContent: "Picnic Day",
    PostImage: Post8,
    Likes: 22,
    username: "defaultusername",
    comments: [
      {
        username: "mike_rs",
        ProfilePicture: User2,
        comment: "a nice idea for a weekend ",
        Likes: 3,
      },
    ],
  },
];
const Messages = [
  {
    ProfilePicture: User4,
    Name: "Sarah Tancedi",
    ConversationID: "12",
    messages: [
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not , we can gop to the same address as always 👍😊",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },

      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not , we can gop to the same address as always 👍😊",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },

      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
    ],
  },
  {
    ProfilePicture: User1,
    Name: "Arthur Shelby",
    ConversationID: "2",
    messages: [
      {
        content: "What Are you up tonight ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
    ],
  },
  {
    ProfilePicture: User2,
    Name: "Mike Ross",
    messages: [
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
    ],
  },
  {
    ProfilePicture: User3,
    Name: "Van Diesel",
    ConversationID: "12A",
    messages: [
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
      {
        content: "i get it , thanks !",
        time: "12:56pm",
        type: "received",
      },
      {
        content: "Why not ?",
        time: "12:56pm",
        type: "sent",
      },
    ],
  },
];
export { FriendsData, FeedTest, Messages };
