'use client';

import { useState } from 'react';
import Image from "next/image"
import Titling from "@/app/components/title";

export function Form() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const  handleSubmit = async (e: any) => {
        e.preventDefault();
        if(name !== '' || phone !== '') {
            const text = `New message from ${name ? name : 'anonym'}:\n\nName: ${name}\nEmail: ${phone}\nMessage:\n${comment}`;

            try {
                const response = await fetch(`https://api.telegram.org/bot${process.env.NEXT_PUBLIC_BOT_TOKEN}/sendMessage`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        chat_id: process.env.NEXT_PUBLIC_CHAT_TOKEN,
                        text: text
                    })
                });

                if (response.ok) {
                    alert('Message sent!');
                } else {
                    alert('Failed to send message.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Failed to send message.');
            }
        } else alert ("Sorry write something")
    };
    return (
        <section id={"donate"} className={"flex flex-col xl:container p-[20px] relative md:my-[100px] "}>
            <Titling title={"Пожертовать"} color={"#EE76A9"}/>
        <div className=" mx-auto  bg-cream  grid grid-cols-1 grid-flow-dense md:grid-cols-2 xl:gap-[100px] gap-8">
            <Image height={150} width={150} className={"absolute lg:w-[150px] lg:h-[150px] right-[90%] w-[50px] h-[50px]  top-5 lg:top-0 lg:right-[300px]"} src={"/images/form-line-circle.svg"} alt={"alt circle"} />
            <Image height={450} width={400} className={"absolute hidden xl:block z-[-1] top-[540px] left-[300px]"} src={"/images/bsnner-line2.svg"} alt={"alt circle"} />
            <Image className={"absolute top-[530px] left-[-50px] hidden xl:block z-[-1]"} src={"/images/form-blue.svg"} alt={"banner-cicrle"} height={200} width={200}/>
            <div className={"order-2 md:order-1"}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-[40px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-red-500 mb-1">Ваше имя</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-[80%] md:w-full p-3 pl-10 border rounded-full shadow-sm focus:ring-red-500 focus:border-red-500"
                                    placeholder="Эркинбеков Арноо"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-red-500 mb-1">Ваш номер телефона</label>
                            <div className="relative">
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-[80%] md:w-full p-3 pl-10 border rounded-full shadow-sm focus:ring-red-500 focus:border-red-500"
                                    placeholder="Номер телефона"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-red-500 mb-1">
                            Ваш комментарий для конкретного ребенка или проекта.
                        </label>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-[95%] mx-auto md:mx-0 h-[190px] md:w-full z-10 xl:h-[190px] bg-white p-3 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                            placeholder="Если у вас есть дополнительные комментарии, пожалуйста, напишите их здесь..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[222px] bg-red-400 text-white py-3 rounded-full font-semibold shadow-md hover:bg-red-500 transition"
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <div className={"order-1 md:order-2"}>
                <h3 className="text-[45px] gilroy w-[90%] font-medium text-[#397BE8]">КАК ИСПОЛЬЗУЮТСЯ СРЕДСТВА ФОНДА?</h3>
                <p className="text-[#397BE8] font-medium text-[20px] mt-4">
                    Все средства, собранные фондом, направляются на реализацию программ помощи детям, обеспечивая их
                    реальной поддержкой в самых разных сферах.
                </p>
                <p className="text-[#397BE8] gilroy font-medium text-[20px] mt-8">
                    Мы стремимся к максимальной прозрачности в вопросе распределения средств, чтобы каждый донор был
                    уверен в том, что его вклад идет на дело, которое меняет жизни детей к лучшему.
                </p>
            </div>
        </div>
        </section>
    )
}
