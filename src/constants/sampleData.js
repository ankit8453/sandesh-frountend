export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Ankit Pawar",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Ayush Pawar",
        _id: "2",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Ayush Pawar",
        _id: "3",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Ayush Pawar",
        _id: "4",
        groupChat: false,
        members: ["1", "2"],
    },
];

export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Ankit Pawar",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Ayush Pawar",
        _id: "2",
    },
];

export const sampleNotifications = [
    {
        sender: {
          avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
          name: "Ankit Pawar",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Ayush Pawar",
          },
        _id: "2",
    },
];

export const sampleMessage = [
    {
       attachments: [],
       content: "jhat ka message",
       _id: "vnefonvofnvoefnvonefv",
       sender: {
        _id: "user._id",
        name: "Sandesh",
       },
       chat: "chatId",
       createdAt: "2024-03-15T10:41:30.6302",
    },

    {
        attachments: [
         {
             publish_id: "cvvfvsvfd",
             url: "https://www.w3schools.com/howto/img_avatar.png",
         },
        ],
        content: "",
        _id: "vnefonvofnvlnjjvfvnvonefv",
        sender: {
         _id: "cnwdecnwnc",
         name: "Sandesh 2",
        },
        chat: "chatId",
        createdAt: "2024-03-15T11:41:30.6302",
     },
];

export const userManageData = {
    users: [
        {
            name: "Ankit Pawar",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "1",
            username: "Ankit Pawar",
            friends: 20,
            groups: 5,
        },
        {
            name: "Ayush Pawar",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "2",
            username: "Ayush Pawar",
            friends: 50,
            groups: 9,
        },
        {
            name: "Arpit Pawar",
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            _id: "3",
            username: "Arpit Pawar",
            friends: 10,
            groups: 2,
        },
    ],

    chats:[
        {
            name: "Chutiya Group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [
                {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
                {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"}
            ],
            totalMembers: 2,
            totalMessages: 20,
            creator : {
                name: "Ankit Pawar",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
        {
            name: "Jhandu Group",
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: true,
            members: [
                {_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"},
                {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"}
            ],
            totalMembers: 2,
            totalMessages: 50,
            creator : {
                name: "Ankit Pawar",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            },
        },
    ],

    messages:[
        {
            attachments: [],
            content: "jhat ka message",
            _id: "vnefonvofnvoefnvonefv",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Sandesh",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-03-15T10:41:30.6302",
        },
        {
            attachments: [
             {
                 publish_id: "cvvfvsvfd",
                 url: "https://www.w3schools.com/howto/img_avatar.png",
             },
            ],
            content: "",
            _id: "vnefonvofnvlnjjvfvnvonefv",
            sender: {
             avatar: "https://www.w3schools.com/howto/img_avatar.png",
             name: "Sandesh 2",
            },
            chat: "chatId",
            groupChat: true,
            createdAt: "2024-03-15T11:41:30.6302",
         },
    ],
};