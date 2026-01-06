const brandData = {
    dior: {
        name: '迪奥',
        description: 'Dior - 优雅与奢华的完美结合',
        lipsticks: [
            {
                name: '迪奥烈艳蓝金唇膏',
                price: '¥380',
                description: '经典蓝金系列，持久显色，滋润保湿',
                image: 'images/dior-lipstick-999.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#999 烈艳蓝金',
                        color: '#C8242B',
                        image: 'images/dior-lipstick-999.jpg',
                        description: '经典正红色，显白必备'
                    },
                    {
                        name: '#846 烈艳蓝金',
                        color: '#8B0000',
                        image: 'images/dior-lipstick-846.jpg',
                        description: '深红色，高贵优雅'
                    },
                    {
                        name: '#777 烈艳蓝金',
                        color: '#C8242B',
                        image: 'images/dior-lipstick-777.jpg',
                        description: '经典正红色，显白必备'
                    },
                    {
                        name: '#756 烈艳蓝金',
                        color: '#B22222',
                        image: 'images/dior-lipstick-756.jpg',
                        description: '火砖红，复古时尚'
                    },
                    {
                        name: '#520 烈艳蓝金',
                        color: '#DC143C',
                        image: 'images/dior-lipstick-520.jpg',
                        description: '樱桃红，饱满诱人'
                    },
                    {
                        name: '#434 烈艳蓝金',
                        color: '#800020',
                        image: 'images/dior-lipstick-434.jpg',
                        description: '勃艮第红，高级感'
                    },
                    {
                        name: '#888 烈艳蓝金',
                        color: '#E74C3C',
                        image: 'images/dior-lipstick-888.jpg',
                        description: '珊瑚红，温柔显气色'
                    },
                    {
                        name: '#772 烈艳蓝金',
                        color: '#CD5C5C',
                        image: 'images/dior-lipstick-772.jpg',
                        description: '印度红，知性优雅'
                    },
                    {
                        name: '#840 烈艳蓝金',
                        color: '#FF6B6B',
                        image: 'images/dior-lipstick-840.jpg',
                        description: '豆沙红，日常百搭'
                    },
                    {
                        name: '#720 烈艳蓝金',
                        color: '#8B4513',
                        image: 'images/dior-lipstick-720.jpg',
                        description: '棕红色，知性优雅'
                    },
                    {
                        name: '#707 烈艳蓝金',
                        color: '#A52A2A',
                        image: 'images/dior-lipstick-707.jpg',
                        description: '砖红色，复古时尚'
                    },
                    {
                        name: '#720 檀绯裸绒雾',
                        color: '#8B4513',
                        image: 'images/dior-lipstick-720檀绯裸绒雾.jpg',
                        description: '绒雾质地，高级感'
                    },
                    {
                        name: '#720 檀绯裸缎光',
                        color: '#8B4513',
                        image: 'images/dior-lipstick-720檀绯裸缎光.jpg',
                        description: '缎光质地，滋润光泽'
                    },
                    {
                        name: '#688 烈艳蓝金',
                        color: '#E9967A',
                        image: 'images/dior-lipstick-688.jpg',
                        description: '鲑鱼红，温柔百搭'
                    },
                    {
                        name: '#626 烈艳蓝金',
                        color: '#DB7093',
                        image: 'images/dior-lipstick-626.jpg',
                        description: '珊瑚粉，温柔显气色'
                    },
                    {
                        name: '#314 烈艳蓝金',
                        color: '#FFB6C1',
                        image: 'images/dior-lipstick-314.jpg',
                        description: '裸粉色，自然清新'
                    },
                    {
                        name: '#299 烈艳蓝金',
                        color: '#FF69B4',
                        image: 'images/dior-lipstick-299.jpg',
                        description: '粉红色，甜美可爱'
                    },
                    {
                        name: '#217 烈艳蓝金',
                        color: '#FF1493',
                        image: 'images/dior-lipstick-217.jpg',
                        description: '深粉色，浪漫迷人'
                    },
                    {
                        name: '#200 烈艳蓝金',
                        color: '#C71585',
                        image: 'images/dior-lipstick-200.jpg',
                        description: '紫红色，神秘高贵'
                    },
                    {
                        name: '#080 烈艳蓝金',
                        color: '#FF69B4',
                        image: 'images/dior-lipstick-080.jpg',
                        description: '粉色系，甜美可爱'
                    },
                    {
                        name: '#188 烈艳蓝金',
                        color: '#FF6347',
                        image: 'images/dior-lipstick-188.jpg',
                        description: '番茄红，活力四射'
                    },
                    {
                        name: '#168 烈艳蓝金',
                        color: '#FF4500',
                        image: 'images/dior-lipstick-168.jpg',
                        description: '橙红色，热情洋溢'
                    },
                    {
                        name: '#120 烈艳蓝金',
                        color: '#FFA07A',
                        image: 'images/dior-lipstick-120.jpg',
                        description: '浅橙色，温柔甜美'
                    },
                    {
                        name: '#100 烈艳蓝金',
                        color: '#FF7F50',
                        image: 'images/dior-lipstick-100.jpg',
                        description: '珊瑚色，清新自然'
                    }
                ]
            },
            {
                name: '迪奥魅惑唇膏',
                price: '¥350',
                description: '水润光泽，轻薄不黏腻',
                image: 'images2/dior-lipstick-212.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#212 魅惑',
                        color: '#FF69B4',
                        image: 'images2/dior-lipstick-212.jpg',
                        description: '粉色系，甜美可爱'
                    },
                    {
                        name: '#428 魅惑',
                        color: '#DC143C',
                        image: 'images2/dior-lipstick-428.jpg',
                        description: '樱桃红，饱满诱人'
                    },
                    {
                        name: '#524 魅惑',
                        color: '#B22222',
                        image: 'images2/dior-lipstick-524.jpg',
                        description: '酒红色，成熟魅力'
                    },
                    {
                        name: '#527 魅惑',
                        color: '#8B0000',
                        image: 'images2/dior-lipstick-527.jpg',
                        description: '深红色，高贵优雅'
                    },
                    {
                        name: '#616 魅惑',
                        color: '#FF6B6B',
                        image: 'images2/dior-lipstick-616.jpg',
                        description: '豆沙红，日常百搭'
                    },
                    {
                        name: '#652 魅惑',
                        color: '#C8242B',
                        image: 'images2/dior-lipstick-652.jpg',
                        description: '经典正红色，显白必备'
                    },
                    {
                        name: '#667 魅惑',
                        color: '#E74C3C',
                        image: 'images2/dior-lipstick-667.jpg',
                        description: '珊瑚红，温柔显气色'
                    },
                    {
                        name: '#716 魅惑',
                        color: '#8B4513',
                        image: 'images2/dior-lipstick-716.jpg',
                        description: '棕红色，知性优雅'
                    },
                    {
                        name: '#720 魅惑',
                        color: '#A52A2A',
                        image: 'images2/dior-lipstick-720.jpg',
                        description: '砖红色，复古时尚'
                    },
                    {
                        name: '#740 魅惑',
                        color: '#CD5C5C',
                        image: 'images2/dior-lipstick-740.jpg',
                        description: '印度红，知性优雅'
                    },
                    {
                        name: '#786 魅惑',
                        color: '#B22222',
                        image: 'images2/dior-lipstick-786.jpg',
                        description: '火砖红，复古时尚'
                    },
                    {
                        name: '#8 魅惑',
                        color: '#FFB6C1',
                        image: 'images2/dior-lipstick-8.jpg',
                        description: '裸粉色，自然清新'
                    },
                    {
                        name: '#862 魅惑',
                        color: '#DB7093',
                        image: 'images2/dior-lipstick-862.jpg',
                        description: '珊瑚粉，温柔显气色'
                    }
                ]
            }
        ],
        perfumes: [
            {
                name: '迪奥小姐香水',
                price: '¥930',
                description: '清新花香调，优雅迷人',
                image: 'images3/dior-perfume-小姐.jpg'
            },
            {
                name: '迪奥真我香水',
                price: '¥930',
                description: '经典金色瓶身，永恒魅力',
                image: 'images3/dior-perfume-真我.jpg'
            },
            {
                name: '迪奥小姐花漾香水',
                price: '¥930',
                description: '浪漫花香调，温柔甜美',
                image: 'images3/dior-perfume-花漾.jpg'
            }
        ]
    },
    tf: {
        name: 'TF',
        description: 'Tom Ford - 奢华与性感的代名词',
        lipsticks: [
            {
                name: 'TF黑管唇膏',
                price: '¥520',
                description: '奢华黑管，丝缎质地',
                image: 'images4/dior-lipstick-经典正红色16.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#16 经典正红色',
                        color: '#C41E3A',
                        image: 'images4/dior-lipstick-经典正红色16.jpg',
                        description: '经典绯红，奢华优雅'
                    },
                    {
                        name: '#16 哑光',
                        color: '#C41E3A',
                        image: 'images4/dior-lipstick-哑光16.jpg',
                        description: '哑光质地，高级感'
                    },
                    {
                        name: '#100 哑光',
                        color: '#8B4513',
                        image: 'images4/dior-lipstick-哑光100.jpg',
                        description: '棕红色，知性优雅'
                    },
                    {
                        name: '#05 水感缎光',
                        color: '#B22222',
                        image: 'images4/dior-lipstick-水感缎光05.jpg',
                        description: '火砖红，复古时尚'
                    },
                    {
                        name: '#06 水感缎光',
                        color: '#CD5C5C',
                        image: 'images4/dior-lipstick-水感缎光06.jpg',
                        description: '印度红，知性优雅'
                    },
                    {
                        name: '#14 水感缎光',
                        color: '#E9967A',
                        image: 'images4/dior-lipstick-水感缎光14.jpg',
                        description: '鲑鱼红，温柔百搭'
                    },
                    {
                        name: '#15 水感缎光',
                        color: '#DB7093',
                        image: 'images4/dior-lipstick-水感缎光15.jpg',
                        description: '珊瑚粉，温柔显气色'
                    },
                    {
                        name: '#19 水感缎光',
                        color: '#FFB6C1',
                        image: 'images4/dior-lipstick-水感缎光19.jpg',
                        description: '裸粉色，自然清新'
                    }
                ]
            },
            {
                name: 'TF细管唇膏',
                price: '¥420',
                description: '精致小巧，携带方便',
                image: 'images5/dior-lipstick-100.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#100 细管',
                        color: '#8B4513',
                        image: 'images5/dior-lipstick-100.jpg',
                        description: '棕红色，知性优雅'
                    },
                    {
                        name: '#150 细管',
                        color: '#B22222',
                        image: 'images5/dior-lipstick-150.jpg',
                        description: '火砖红，复古时尚'
                    },
                    {
                        name: '#155 细管',
                        color: '#CD5C5C',
                        image: 'images5/dior-lipstick-155.jpg',
                        description: '印度红，知性优雅'
                    },
                    {
                        name: '#156 细管',
                        color: '#E9967A',
                        image: 'images5/dior-lipstick-156.jpg',
                        description: '鲑鱼红，温柔百搭'
                    },
                    {
                        name: '#157 细管',
                        color: '#DB7093',
                        image: 'images5/dior-lipstick-157.jpg',
                        description: '珊瑚粉，温柔显气色'
                    }
                ]
            }
        ],
        perfumes: [
            {
                name: 'TF珍华乌木香水',
                price: '¥1400',
                description: '木质东方调，神秘高贵',
                image: 'images6/TF-perfume-珍华乌木.jpg'
            },
            {
                name: 'TF璀璨流光香水',
                price: '¥890',
                description: '清新柑橘调，活力四射',
                image: 'images6/TF-perfume-璀璨流光.jpg'
            },
            {
                name: 'TF白麝香香水',
                price: '¥1400',
                description: '温暖花香调，浪漫迷人',
                image: 'images6/TF-perfume-白麝香.jpg'
            }
        ]
    },
    ysl: {
        name: '圣罗兰',
        description: 'YSL - 大胆与时尚的象征',
        lipsticks: [
            {
                name: 'YSL小金条',
                price: '¥410',
                description: '经典金色包装，哑光质地',
                image: 'images7/YSL-1966.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#1966 小金条',
                        color: '#8B0000',
                        image: 'images7/YSL-1966.jpg',
                        description: '复古红棕，高级质感'
                    },
                    {
                        name: '#1977 小金条',
                        color: '#8B4513',
                        image: 'images7/YSL-1977.jpg',
                        description: '红棕色，知性优雅'
                    },
                    {
                        name: '#1988 小金条',
                        color: '#A52A2A',
                        image: 'images7/YSL-1988.jpg',
                        description: '砖红色，复古时尚'
                    },
                    {
                        name: '#1988 摘星者',
                        color: '#A52A2A',
                        image: 'images7/YSL-1988摘星者.jpg',
                        description: '限定款，独特魅力'
                    },
                    {
                        name: '#1936 小金条',
                        color: '#C41E3A',
                        image: 'images7/YSL-1936.jpg',
                        description: '复古正红，经典百搭'
                    },
                    {
                        name: '#1936 限定款',
                        color: '#C41E3A',
                        image: 'images7/YSL-1936限定款.jpg',
                        description: '限定款，经典正红'
                    },
                    {
                        name: '#23 小金条',
                        color: '#DC143C',
                        image: 'images7/YSL-23.jpg',
                        description: '正红色，显白神器'
                    },
                    {
                        name: '#24 小金条',
                        color: '#E74C3C',
                        image: 'images7/YSL-24.jpg',
                        description: '珊瑚红，温柔显气色'
                    },
                    {
                        name: '#25 小金条',
                        color: '#CD5C5C',
                        image: 'images7/YSL-25.jpg',
                        description: '印度红，知性优雅'
                    },
                    {
                        name: '#27 小金条',
                        color: '#B22222',
                        image: 'images7/YSL-27.jpg',
                        description: '火砖红，复古时尚'
                    },
                    {
                        name: '#28 小金条',
                        color: '#FF6B6B',
                        image: 'images7/YSL-28.jpg',
                        description: '豆沙红，日常百搭'
                    },
                    {
                        name: '#29 小金条',
                        color: '#E9967A',
                        image: 'images7/YSL-29.jpg',
                        description: '鲑鱼红，温柔百搭'
                    },
                    {
                        name: '#30 小金条',
                        color: '#DB7093',
                        image: 'images7/YSL-30.jpg',
                        description: '珊瑚粉，温柔显气色'
                    },
                    {
                        name: '#31 小金条',
                        color: '#FFB6C1',
                        image: 'images7/YSL-31.jpg',
                        description: '裸粉色，自然清新'
                    },
                    {
                        name: '#314 小金条',
                        color: '#FF69B4',
                        image: 'images7/YSL-314.jpg',
                        description: '粉红色，甜美可爱'
                    },
                    {
                        name: '#32 小金条',
                        color: '#FF1493',
                        image: 'images7/YSL-32.jpg',
                        description: '深粉色，浪漫迷人'
                    },
                    {
                        name: '#33 小金条',
                        color: '#C71585',
                        image: 'images7/YSL-33.jpg',
                        description: '紫红色，神秘高贵'
                    },
                    {
                        name: '#35 小金条',
                        color: '#FF6347',
                        image: 'images7/YSL-35.jpg',
                        description: '番茄红，活力四射'
                    },
                    {
                        name: '#37 小金条',
                        color: '#FF4500',
                        image: 'images7/YSL-37.jpg',
                        description: '橙红色，热情洋溢'
                    }
                ]
            },
            {
                name: 'YSL黑管唇釉',
                price: '¥360',
                description: '水光唇釉，持久不脱色',
                image: 'images8/YSL-416欲望.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#416 欲望',
                        color: '#FF69B4',
                        image: 'images8/YSL-416欲望.jpg',
                        description: '烂番茄色，元气满满'
                    },
                    {
                        name: '#440 野玫瑰',
                        color: '#DC143C',
                        image: 'images8/YSL-440野玫瑰.jpg',
                        description: '玫瑰红，浪漫迷人'
                    },
                    {
                        name: '#442 烈酒浅棕',
                        color: '#8B4513',
                        image: 'images8/YSL-442烈酒浅棕.jpg',
                        description: '棕红色，知性优雅'
                    },
                    {
                        name: '#443 宿醉香槟',
                        color: '#D2B48C',
                        image: 'images8/YSL-443宿醉香槟.jpg',
                        description: '香槟色，温柔知性'
                    },
                    {
                        name: '#610 冰乌龙',
                        color: '#E9967A',
                        image: 'images8/YSL-610冰乌龙.jpg',
                        description: '鲑鱼红，温柔百搭'
                    },
                    {
                        name: '#620 失温裸',
                        color: '#DEB887',
                        image: 'images8/YSL-620失温裸.jpg',
                        description: '裸棕色，自然清新'
                    },
                    {
                        name: '#622 冰川葡',
                        color: '#CD853F',
                        image: 'images8/YSL-622冰川葡.jpg',
                        description: '葡萄色，独特魅力'
                    }
                ]
            },
            {
                name: 'YSL啵啵唇冻',
                price: '¥340',
                description: '滋润保湿，日常首选',
                image: 'images9/YSL-01银河冻.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#01 银河冻',
                        color: '#E6E6FA',
                        image: 'images9/YSL-01银河冻.jpg',
                        description: '银河色，梦幻唯美'
                    },
                    {
                        name: '#04 乌龙冻',
                        color: '#D2B48C',
                        image: 'images9/YSL-04乌龙冻.jpg',
                        description: '乌龙色，温柔知性'
                    },
                    {
                        name: '#05 冷茶冻',
                        color: '#DEB887',
                        image: 'images9/YSL-05冷茶冻.jpg',
                        description: '茶色，清新自然'
                    },
                    {
                        name: '#07 红梨冻',
                        color: '#DC143C',
                        image: 'images9/YSL-07红梨冻.jpg',
                        description: '红梨色，浪漫迷人'
                    },
                    {
                        name: '#08 玫瑰冻',
                        color: '#FF69B4',
                        image: 'images9/YSL-08玫瑰冻.jpg',
                        description: '玫瑰色，甜美可爱'
                    }
                ]
            }
        ],
        perfumes: [
            {
                name: 'YSL自由之水',
                price: '¥1150',
                description: '橙花香调，自由奔放',
                image: 'images12/YSL-perfume-自由之水.jpg'
            },
            {
                name: 'YSL黑色奥漂茗',
                price: '¥850',
                description: '东方调，神秘诱惑',
                image: 'images12/YSL-perfume-黑色奥漂茗.jpg'
            },
            {
                name: 'YSL反转巴黎',
                price: '¥850',
                description: '甜美花香调，浪漫邂逅',
                image: 'images12/YSL-perfume-反转巴黎.jpg'
            }
        ]
    },
    armani: {
        name: '阿玛尼',
        description: 'Armani - 意大利优雅与奢华',
        lipsticks: [
            {
                name: '阿玛尼红管唇釉',
                price: '¥385',
                description: '丝绒哑光，高级质感',
                image: 'images10/ARMANI-400阿玛尼红.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#400 阿玛尼红',
                        color: '#C41E3A',
                        image: 'images10/ARMANI-400阿玛尼红.jpg',
                        description: '经典正红，显白神器'
                    },
                    {
                        name: '#405 烂番茄红',
                        color: '#FF6347',
                        image: 'images10/ARMANI-405烂番茄红.jpg',
                        description: '烂番茄红，显白神器'
                    },
                    {
                        name: '#405 烂番茄红（限定款）',
                        color: '#FF6347',
                        image: 'images10/ARMANI-405烂番茄红（限定款）.jpg',
                        description: '限定款，独特魅力'
                    },
                    {
                        name: '#415 山楂红',
                        color: '#DC143C',
                        image: 'images10/ARMANI-415山楂红.jpg',
                        description: '山楂红，复古时尚'
                    },
                    {
                        name: '#16 绯红衣襟',
                        color: '#C8242B',
                        image: 'images10/ARMANI-16绯红衣襟.jpg',
                        description: '绯红衣襟，高级质感'
                    },
                    {
                        name: '#200 炙热土棕',
                        color: '#8B4513',
                        image: 'images10/ARMANI-200炙热土棕.jpg',
                        description: '炙热土棕，知性优雅'
                    },
                    {
                        name: '#206 陶土红棕',
                        color: '#A52A2A',
                        image: 'images10/ARMANI-206陶土红棕.jpg',
                        description: '陶土红棕，复古时尚'
                    },
                    {
                        name: '#20 裸棕镜面水光',
                        color: '#CD853F',
                        image: 'images10/ARMANI-20裸棕镜面水光.jpg',
                        description: '裸棕色，水光质地'
                    },
                    {
                        name: '#14 镜面水光',
                        color: '#E9967A',
                        image: 'images10/ARMANI-14镜面水光.jpg',
                        description: '镜面水光，清透光泽'
                    },
                    {
                        name: '#321 豆沙裸粉',
                        color: '#FFB6C1',
                        image: 'images10/ARMANI-321豆沙裸粉.jpg',
                        description: '豆沙裸粉，温柔日常'
                    },
                    {
                        name: '#142 梦中人',
                        color: '#DB7093',
                        image: 'images10/ARMANI-142梦中人.jpg',
                        description: '梦中人，浪漫迷人'
                    },
                    {
                        name: '#321 梦中人',
                        color: '#FF69B4',
                        image: 'images10/ARMANI-321梦中人.jpg',
                        description: '梦中人，甜美可爱'
                    },
                    {
                        name: '#214 暧昧奶杏',
                        color: '#FFE4C4',
                        image: 'images10/ARMANI-214暧昧奶杏.jpg',
                        description: '暧昧奶杏，温柔清新'
                    },
                    {
                        name: '#405 素颜',
                        color: '#FFA07A',
                        image: 'images10/ARMANI-405素颜.jpg',
                        description: '素颜色，自然清新'
                    }
                ]
            },
            {
                name: '阿玛尼黑管唇膏',
                price: '¥404',
                description: '滋润光泽，持久显色',
                image: 'images11/ARMANI-107奶油白桃色.jpg',
                type: 'lipstick',
                colors: [
                    {
                        name: '#107 奶油白桃色',
                        color: '#FFDAB9',
                        image: 'images11/ARMANI-107奶油白桃色.jpg',
                        description: '奶油白桃色，温柔清新'
                    },
                    {
                        name: '#110 裸色',
                        color: '#F5DEB3',
                        image: 'images11/ARMANI-110裸色.jpg',
                        description: '裸色，自然日常'
                    },
                    {
                        name: '#201 肉桂泰奶色',
                        color: '#DEB887',
                        image: 'images11/ARMANI-201肉桂泰奶色.jpg',
                        description: '肉桂泰奶色，知性优雅'
                    },
                    {
                        name: '#202 栗子红棕色',
                        color: '#8B4513',
                        image: 'images11/ARMANI-202栗子红棕色.jpg',
                        description: '栗子红棕色，复古时尚'
                    },
                    {
                        name: '#206 热火红棕',
                        color: '#A52A2A',
                        image: 'images11/ARMANI-206热火红棕.jpg',
                        description: '热火红棕，高级质感'
                    },
                    {
                        name: '#214 杏仁奶咖色',
                        color: '#FFE4C4',
                        image: 'images11/ARMANI-214杏仁奶咖色.jpg',
                        description: '杏仁奶咖色，温柔日常'
                    },
                    {
                        name: '#404 浆果玫瑰色',
                        color: '#DC143C',
                        image: 'images11/ARMANI-404浆果玫瑰色.jpg',
                        description: '浆果玫瑰色，浪漫迷人'
                    },
                    {
                        name: '#405 暖橘番茄色',
                        color: '#FF6347',
                        image: 'images11/ARMANI-405暖橘番茄色.jpg',
                        description: '暖橘番茄色，显白神器'
                    },
                    {
                        name: '#504 自在豆沙色',
                        color: '#FFB6C1',
                        image: 'images11/ARMANI-504自在豆沙色.jpg',
                        description: '自在豆沙色，温柔百搭'
                    }
                ]
            }
        ],
        perfumes: [
            {
                name: '阿玛尼挚爱',
                price: '¥880',
                description: '甜美花香调，浪漫温馨',
                image: 'images13/ARMANI-perfume-挚爱.jpg'
            },
            {
                name: '阿玛尼MY WAY自我无界',
                price: '¥950',
                description: '木质花香调，中性魅力',
                image: 'images13/ARMANI-perfume-MYWAY香水.jpg'
            },
            {
                name: '阿玛尼PRIVE私藏系列',
                price: '¥1280',
                description: '高级定制香氛，独特奢华',
                image: 'images13/ARMANI-perfume-PRIVE香水.jpg'
            }
        ]
    }
};
