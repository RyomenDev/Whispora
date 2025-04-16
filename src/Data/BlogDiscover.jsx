import AI_1Img from "../assets/Blogs/AI_1.png";
import AI_2Img from "../assets/Blogs/AI_2.png";
import AWSImg from "../assets/Blogs/AWS.png";
import JS_1Img from "../assets/Blogs/JS_1.png";
import JS_2Img from "../assets/Blogs/JS_2.png";
import MDesignImg from "../assets/Blogs/MDesign.png";
import NodejsGraphQLImg from "../assets/Blogs/NodejsGraphQL.png";
import ReactImg from "../assets/Blogs/React.png";
import WebSocketsImg from "../assets/Blogs/WebSockets.png";

const BlogDiscoverData = [
  {
    id: 1,
    title: "How AI Is Changing Web Development",
    description: `**How AI Is Changing Web Development** explores how *Artificial Intelligence* is revolutionizing the landscape of web development. AI tools are increasingly helping developers streamline workflows, automate repetitive tasks, and improve productivity.

Some key highlights include:
- **AI-powered code suggestions**: Tools like GitHub Copilot and IntelliCode help automate code writing.
- **Automated design systems**: AI-driven tools can suggest or even generate design components based on user needs.
- **Smart testing tools**: AI optimizes testing by automatically finding bugs, ensuring faster delivery.

The future of web development is heavily influenced by AI, and this blog dives deep into how developers can utilize these tools to stay ahead of the curve. Whether you’re a frontend or backend developer, integrating AI into your workflow will unlock new possibilities.`,
    image: AI_1Img,
    // image:
    //   "https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=",
    date: "April 10, 2025",
    views: "14.2k",
    category: "AI",
    author: "John Doe",
    tags: ["AI", "Web Development", "Automation"],
    isFeatured: true,
    isTrending: true,
    isLatest: true,
    isRecommended: true,
    isEditorPick: true,
    readingTime: "5 min",
    likes: 87,
  },
  {
    id: 2,
    title: "Top 10 JavaScript Tricks for Developers",
    description: `**Top 10 JavaScript Tricks for Developers** will level up your *JavaScript* skills with expert tricks. From advanced destructuring to optimizing your JavaScript code for better performance, these tips are essential for anyone looking to become a more efficient developer.

Key tricks include:
- **Advanced destructuring**: Unlock more readable and concise code.
- **Memoization techniques**: Boost performance by avoiding unnecessary function calls.
- **Optimizing loops**: Learn how to loop through large datasets efficiently.

This blog also highlights common mistakes developers make and provides solutions to overcome them. Whether you’re new to JavaScript or an experienced developer, these tricks will elevate your coding game to the next level.`,
    // image:
    //   "https://contentstatic.techgig.com/thumb/msid-114166913,width-800,resizemode-4/10-JavaScript-concepts-for-Node-developers-to-learn.jpg?53276",
    image: JS_1Img,
    date: "March 28, 2025",
    views: "11.6k",
    category: "JavaScript",
    author: "Akash Mishra",
    tags: ["JavaScript", "Tips", "Performance"],
    isTrending: true,
    isRecommended: true,
    isEditorPick: true,
    readingTime: "4 min",
    likes: 178,
  },
  {
    id: 3,
    title: "Mastering React Performance Optimization",
    description: `**Mastering React Performance Optimization** focuses on techniques for optimizing the performance of *React* applications. Slow performance in React apps can be a major issue, but with the right strategies, you can make your apps blazing fast and responsive.

Topics covered include:
- **Memoization**: Avoid unnecessary re-renders and enhance app performance.
- **Lazy loading**: Load only the necessary components to reduce the initial loading time.
- **Virtualization**: Efficiently render large lists and tables by only displaying visible items.

React performance optimization is an essential skill, especially as your app grows in complexity. This blog provides real-world examples and practical solutions that you can apply today to improve your React apps.`,
    // image:
    //   "https://sourcebae.com/blog/wp-content/uploads/2023/08/Benefits-of-ReactJS.jpg",
    image: ReactImg,
    date: "February 20, 2025",
    views: "12.4k",
    category: "React",
    author: "Jane Smith",
    tags: ["React", "Performance", "Optimization"],
    isRecommended: true,
    isEditorPick: true,
    readingTime: "6 min",
    likes: 128,
  },
  {
    id: 4,
    title: "Using AI to Generate Stunning Blog Images Automatically",
    description: `**Using AI to Generate Stunning Blog Images Automatically** introduces you to AI-driven tools that can generate eye-catching images for your blog posts, eliminating the need to manually search for stock photos or images.

Key points discussed:
- **DALL·E**: AI that creates unique images from text descriptions.
- **Image generation APIs**: Tools that can automate the process of adding custom images to your posts.
- **Cost savings**: By using AI, you save time and money spent on purchasing stock images.

This blog will teach you how AI is revolutionizing content creation and how you can use it to improve your blog's visual appeal while saving time.`,
    // image:
    //   "https://www.atomcamp.com/wp-content/uploads/2024/02/AI-Everywhere-blog-header.png",
    image: AI_2Img,
    date: "April 08, 2025",
    views: "19.3k",
    category: "AI Tools",
    author: "Emily Jordan",
    tags: ["AI", "Design", "Automation"],
    isLatest: true,
    isEditorPick: false,
    isRecommended: true,
    readingTime: "3 min",
    likes: 78,
  },
  {
    id: 5,
    title: "Deploying Apps with AWS",
    description: `**Deploying Apps with AWS** provides an in-depth guide to deploying your full-stack applications on *Amazon Web Services (AWS)*. It covers essential AWS services such as EC2, S3, and CloudFront for hosting applications.

This blog will help you:
- **Set up EC2 instances** for hosting your app.
- **Use S3 buckets** for storing static assets like images and stylesheets.
- **Configure CloudFront** for delivering content faster through a global CDN.

AWS is a powerful platform for scalable deployments, and this blog provides hands-on advice for getting your apps deployed efficiently. Learn how to make the most of AWS’s features and improve the reliability and performance of your web applications.`,
    // image:
    //   "https://careertraining.csusm.edu/common/images/2/22994/Certified-AWS-Cloud-Practitioner-935x572.jpg",
    image: AWSImg,
    date: "March 15, 2025",
    views: "10.1k",
    category: "DevOps",
    author: "Akash Mishra",
    tags: ["AWS", "DevOps", "Deployment"],
    isEditorPick: true,
    isTrending: true,
    isRecommended: true,
    readingTime: "7 min",
    likes: 117,
  },
  {
    id: 6,
    title: "Understanding JavaScript Closures with Real Examples",
    description: `**Understanding JavaScript Closures with Real Examples** breaks down the concept of *closures*, one of the fundamental features of JavaScript. Closures are used in real-world applications and are essential for working with functions in JavaScript.

This blog covers:
- **What are closures?** Understanding how closures allow functions to retain access to their lexical scope.
- **Real examples**: See how closures are used in event handlers, setTimeout, and more.
- **Common mistakes**: Learn how to avoid common pitfalls when using closures in JavaScript.

Closures are a powerful feature in JavaScript, and this blog makes it easy to understand and apply them to your codebase.`,
    // image:
    //   "https://st.depositphotos.com/1518767/4298/i/450/depositphotos_42984257-stock-photo-javascript-against-futuristic-black-and.jpg",
    image: JS_2Img,
    date: "March 02, 2025",
    views: "9.1k",
    category: "JavaScript",
    author: "Nina Patel",
    tags: ["JavaScript", "Closures", "Functions"],
    isRecommended: true,
    isEditorPick: true,
    readingTime: "5 min",
    likes: 217,
  },
  {
    id: 7,
    title: "Demystifying WebSockets for Real-Time Applications",
    description: `**Demystifying WebSockets for Real-Time Applications** dives into the world of *WebSockets*, a protocol that provides full-duplex communication channels over a single TCP connection. Real-time applications such as chat apps and online games rely on WebSockets for instant data exchange.

This blog discusses:
- **How WebSockets work**: Understanding the client-server connection.
- **Practical applications**: Building a real-time chat app in just 15 minutes.
- **Benefits of WebSockets**: Why they're superior for real-time apps over traditional HTTP requests.

Learn how to leverage WebSockets in your applications to create seamless, real-time user experiences.`,
    // image:
    //   "https://stream-blog-v2.imgix.net/blog/wp-content/uploads/431a7c17f09464a49117bd192cf3d608/WebSocket-Connections-1200x630px.png?auto=format&auto=compress",
    image: WebSocketsImg,
    date: "April 10, 2025",
    views: "6.7k",
    category: "Real-Time",
    author: "Aman Kapoor",
    tags: ["WebSockets", "Real-Time", "Sockets"],
    isEditorPick: false,
    isLatest: true,
    readingTime: "5 min",
    likes: 717,
  },
  {
    id: 8,
    title: "Minimalist Design Trends",
    description: `**Minimalist Design Trends** explores how *minimalism* is not only a visual style but also a philosophy that enhances both usability and brand perception. This design philosophy emphasizes simplicity and clarity.

Key principles of minimalist design:
- **Clean lines and spacious layouts**: A focus on user experience and intuitive interfaces.
- **Subtle color palettes**: Muted tones that focus on functionality and ease of use.
- **Less is more**: Eliminate unnecessary elements for a streamlined look.

Minimalist design is becoming increasingly popular across various industries. This blog helps you understand how to implement minimalist principles in your own design projects.`,
    image: MDesignImg,
    // image:
    //   "https://www.gangofdesigners.com/wp-content/uploads/2024/07/sagarasde.jpg",
    date: "February 01, 2025",
    views: "12.5k",
    category: "UI/UX",
    author: "Sana Rafiq",
    tags: ["Design", "UI/UX", "Minimalism"],
    isTrending: true,
    isEditorPick: false,
    readingTime: "4 min",
    likes: 517,
  },
  {
    id: 9,
    title: "Getting Started with GraphQL in Node.js",
    description: `**Getting Started with GraphQL in Node.js** introduces the *GraphQL* query language and explains how it can replace REST for building flexible and efficient APIs. Learn how to set up a GraphQL server with *Node.js*, *Apollo Server*, and *MongoDB*.

In this blog, you’ll learn:
- **Setting up Apollo Server**: A powerful tool for building GraphQL APIs in Node.js.
- **Schema design**: Best practices for defining types and resolvers.
- **MongoDB integration**: How to query MongoDB with GraphQL.

By the end of this blog, you'll have the knowledge needed to implement your own GraphQL server and begin using it in production environments.`,
    // image:
    //   "https://cdn.hashnode.com/res/hashnode/image/upload/v1676711482279/b751c42b-150b-4285-8831-29b731b5ffe8.png",
    image: NodejsGraphQLImg,
    date: "March 30, 2025",
    views: "6.2k",
    category: "Backend",
    author: "Akash Mishra",
    tags: ["GraphQL", "API", "Node.js"],
    isRecommended: true,
    isEditorPick: false,
    readingTime: "5 min",
    likes: 417,
  },
];

export { BlogDiscoverData };
