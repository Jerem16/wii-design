import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Réalisations"
};
import Frames from "@/frames/Frames";
export default async function Page() {
    // await new Promise(r => setTimeout(r, 5000));
    return (
        <>
            <Frames className="section" id="novice">
                <h2>Réalisations</h2>
                <div className="s1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit aliquid provident magnam, delectus nobis est sunt
                        iste aut at error assumenda voluptas, harum sed
                        consequuntur voluptate soluta deleniti voluptatum
                        consequatur.
                    </p>
                </div>
            </Frames>
            <Frames className="section" id="expert">
                <></>
            </Frames>
        </>
    );
}
