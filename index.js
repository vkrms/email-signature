const { createApp, ref } = Vue

const team = [
    // mark middo
    {
        mugshot: './team/mark.png',
        nameText: 'Mark Middo',
        title: 'Co-founder',
        email: 'mm@eventflo.io',
        tel: '+61 421 877 162',
    },

    // corey topp
    {
        mugshot: './team/corey_topp_face.jpg',
        nameText: 'Corey Topp',
        title: 'Co-founder & CMO',
        email: 'ct@eventflo.io',
        tel: '+61 438 931 501',
    },

    // samir rafiq
    {
        mugshot: './team/samir.jpg',
        nameText: 'Samir Rafiq',
        title: 'Chief Operating Officer',
        email: 'samir@eventflo.io',
        tel: '+61 411 122 929',
    },

    // calum buchanan
    {
        mugshot: './team/calum_buchanan.jpg',
        nameImg: './calum_buchanan_name.png',
        nameText: 'Calum Buchanan',
        title: 'Chief Financial Officer',
        email: 'cb@eventflo.io',
        tel: '+61 402 677 540',
    },

    // jasmin corro
    {
        mugshot: './team/jasmin_corro.jpg',
        nameText: 'Jasmin Corro',
        title: 'Executive Assistant',
        email: 'jc@eventflo.io',
        tel: '+63 905 520 2694',
    },

    // Alex Pirouz
    {
        mugshot: './team/alex_pirouz.jpg',   
        nameText: 'Alex Pirouz',
        title: 'Chief Growth Officer',
        email: 'ap@eventflo.io',
        tel: '+61 412 009 902',
    }
]

createApp({
    setup() {
        const message = ref('Hello vue!')
        const temp_string = ref('temp_string')
        const nameText = ref('Some Body')

        const socials = ref([
            {
                name: 'Twitter',
                link: 'https://twitter.com/eventfloHQ',
                icon: './socials/twitter.png'
            },
            {
                name: 'LinkedIn',
                link: 'https://www.linkedin.com/company/eventflohq/',
                icon: './socials/linkedin.png'
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/eventfloHQ',
                icon: './socials/instagram.png'
            },
            {
                name: 'Telegram',
                link: 'https://t.me/eventfloHQ',
                icon: './socials/telegram.png'
            },
            {
                name: 'Discord',
                link: 'https://discord.gg/GWvxPD8SA5',
                icon: './socials/discord.png'
            },
        ])

        return {
            message,
            temp_string,
            nameText,
            socials,
            team
        }
    }
}).mount('#app')