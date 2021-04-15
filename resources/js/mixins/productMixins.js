export default {
    data() {
        return {
            products: [
                {
                    id: 0,
                    title: "T-Shirt",
                    price: 90000,
                    img_urls: ["tshirt_black_front.png"],
                    images: [
                        {
                            black_variant: [
                                "tshirt_black_front.png",
                                "tshirt_black_back.png",
                            ],
                            white_variant: [
                                "tshirt_white_front.png",
                                "tshirt_white_back.png",
                            ]
                        }
                    ],
                    tag: "tshirt",
                    link_to: "/products/detail?tag=tshirt",
                    available: true
                },
                {
                    id: 1,
                    title: "Totte Bag",
                    price: 60000,
                    img_urls: ["totte_bag_black_front.png"],
                    images: [
                        {
                            black_variant: [
                                "totte_bag_black_front.png",
                                "totte_bag_black_back.png",
                            ],
                            white_variant: [
                                "totte_bag_white_front.png",
                                "totte_bag_white_back.png",
                            ]
                        }
                    ],
                    tag: "totte_bag",
                    link_to: "/products/detail?tag=totte_bag",
                    available: true
                },
                {
                    id: 2,
                    title: "E Money",
                    price: 50000,
                    img_urls: ["e_money_front.png"],
                    images: [
                        "e_money_front.png",
                        "e_money_back.png",
                    ],
                    tag: "e_money",
                    link_to: "/products/detail?tag=e_money",
                    available: true
                },
                {
                    id: 5,
                    title: "Sticker",
                    price: 25000,
                    img_urls: ["sticker.png"],
                    tag: "sticker",
                    images: [
                        "sticker.png"
                    ],
                    link_to: "/products/detail?tag=sticker",
                    available: true
                },
                {
                    id: 6,
                    title: "Lanyard",
                    price: 25000,
                    img_urls: ["lanyard.png"],
                    tag: "lanyard",
                    images: [
                        "lanyard.png"
                    ],
                    link_to: "/products/detail?tag=lanyard",
                    available: true
                },
                {
                    id: 7,
                    title: "Bundle A",
                    price: 160000,
                    img_urls: [
                        "bundle_a.png"
                    ],
                    tag: "bundle_a",
                    images: [
                        {
                            black_variant: [
                                "tshirt_black_front.png",
                                "tshirt_black_back.png",
                                "totte_bag_black_front.png",
                                "totte_bag_black_back.png",
                                "sticker.png"
                            ],
                            white_variant: [
                                "tshirt_white_front.png",
                                "tshirt_white_back.png",
                                "totte_bag_white_front.png",
                                "totte_bag_white_back.png",
                                "sticker.png"
                            ]
                        }
                    ],
                    link_to: "/products/detail?tag=bundle_a",
                    available: true
                },
                {
                    id: 8,
                    title: "Bundle B",
                    price: 125000,
                    img_urls: [
                        "bundle_b.png"
                    ],
                    tag: "bundle_b",
                    images: [
                        {
                            black_variant: [
                                "totte_bag_black_front.png",
                                "totte_bag_black_back.png",
                                "e_money_front.png",
                                "e_money_back.png",
                                "lanyard.png"
                            ],
                            white_variant: [
                                "totte_bag_white_front.png",
                                "totte_bag_white_back.png",
                                "e_money_front.png",
                                "e_money_back.png",
                                "lanyard.png"
                            ]
                        }
                    ],
                    link_to: "/products/detail?tag=bundle_b",
                    available: false
                }
            ]
        };
    }
};
