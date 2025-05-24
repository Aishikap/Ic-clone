export const inbox = [
  {
    id: 1,
    user: "Jane Doe",
    avatar: "https://i.pravatar.cc/100?img=1",
    lastMessage: "Appreciate your support!",
    time: "2 min ago",
  },
  {
    id: 2,
    user: "John Smith",
    avatar: "https://i.pravatar.cc/100?img=2",
    lastMessage: "Could you send me more details?",
    time: "10 min ago",
  },
  {
    id: 3,
    user: "Alice Johnson",
    avatar: "https://i.pravatar.cc/100?img=3",
    lastMessage: "Perfect, that did the trick!",
    time: "5 min ago",
  },
  {
    id: 4,
    user: "Michael Brown",
    avatar: "https://i.pravatar.cc/100?img=4",
    lastMessage: "Any updates on this yet?",
    time: "15 min ago",
  },
  {
    id: 5,
    user: "Emily Davis",
    avatar: "https://i.pravatar.cc/100?img=5",
    lastMessage: "Need to update my delivery address.",
    time: "20 min ago",
  },
];

export const messages = {
  1: [
    { from: "user", text: "Hi, I need a hand with my order.", time: "2:05 PM" },
    { from: "admin", text: "Of course! Could you share your order number?", time: "2:06 PM" },
  ],
  2: [
    { from: "user", text: "Do you have a demo I can check out?", time: "3:00 PM" },
    { from: "admin", text: "Absolutely! Here's the demo link.", time: "3:01 PM" },
  ],
  3: [
    { from: "user", text: "I reset the password and everything's working!", time: "4:20 PM" },
    { from: "admin", text: "That's awesome! Reach out if you hit any more issues.", time: "4:22 PM" },
  ],
  4: [
    { from: "user", text: "Hey, just checking if there's any progress?", time: "1:45 PM" },
    { from: "admin", text: "Sorry for the delay — we're on it now!", time: "1:47 PM" },
  ],
  5: [
    { from: "user", text: "I need to change where my order gets delivered.", time: "12:00 PM" },
    { from: "admin", text: "Sure! Just send over the updated address.", time: "12:01 PM" },
  ],
};
