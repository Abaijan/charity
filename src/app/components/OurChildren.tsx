import Image from "next/image";
import Titling from "@/app/components/title";
import {children} from "../../../local.db";
import {Card} from "@/app/components/childCard";
export function OurChildren() {
    return (
        <section id={"children"} className={"flex   flex-col  py-[100px] container"}>
            <Titling title={"Наши дети"} color={"#FEDC69"}/>
            <section className={"container h-[750px] overflow-scroll"}>
                <div className={"flex gap-[20px]"}>
                    {
                        children.map(item => (<Card key={item.id} props={item}/>))
                    }
                </div>
            </section>
        </section>
     );
}