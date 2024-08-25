import AboutUs from "@/components/AboutUs";
import Image from "next/image";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="container lg:my-16 text-wrap ">
      <div className="mb-8 lg:mb-16 font-bold text-4xl text-center">
        <h2>About Us</h2>
      </div>
      <div className="lg:flex ">
        <div className="lg:w-1/2 text-center mb-4">
          <Image
            src="/dr.jpg"
            alt="Gopal Gayakwad Patil"
            width={525}
            height={475}
            className="m-auto"
          />
          <h1 className="font-bold text-xl mt-1">
            Dr.Gopal Gayakwad Patil. BAMS MD (Ayurveda)
          </h1>
        </div>
        <div className="lg:w-1/2 text-gray-600">
          <p className="my-4 md:my-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            dolorem esse accusantium error omnis dolorum adipisci sunt.
            Officiis, rerum. In libero porro vel saepe qui nam sint officiis?
            Quam, tenetur. Incidunt eligendi distinctio molestias illum non
            consequatur architecto quis ea explicabo voluptatum necessitatibus,
            quidem accusantium neque doloribus saepe. Enim sit nemo sequi dolor
            recusandae aliquam explicabo corporis pariatur modi ab.
          </p>

          <p className="my-4">
            {" "}
            Quo expedita saepe debitis exercitationem eius delectus recusandae.
            Sunt placeat adipisci commodi reiciendis illum debitis, laborum
            corrupti non tenetur nostrum quia ipsum suscipit ad quos iure illo
            velit nam beatae. Velit esse expedita numquam id officia enim
            obcaecati quia vel temporibus animi nobis itaque, dolores magnam?
            Delectus porro ducimus, non, minima modi et facilis at, laborum
            nobis doloribus nemo corporis! Debitis iste velit consequuntur illo
            quisquam repudiandae quia doloribus corrupti dolores? Eos amet
            tenetur facere aspernatur minus consequatur quibusdam illo, unde
            soluta neque fuga. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <p className="my-4">
            {" "}
            dolorem esse accusantium error omnis dolorum adipisci sunt.
            Officiis, rerum. In libero porro vel saepe qui nam sint officiis?
            Quam, tenetur. Incidunt eligendi distinctio molestias illum non
            consequatur architecto quis ea explicabo voluptatum necessitatibus,
            quidem accusantium neque doloribus saepe. Enim sit nemo sequi dolor
            recusandae aliquam explicabo corporis pariatur modi ab. Quo expedita
            saepe debitis exercitationem eius delectus recusandae. Sunt placeat
            adipisci commodi reiciendis illum debitis, laborum corrupti non
            tenetur nostrum quia ipsum suscipit ad quos iure illo velit nam
            beatae. Velit esse expedita numquam id officia enim obcaecati quia
          </p>
        </div>
      </div>
      <div className="mt-6 text-gray-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          corrupti porro aut officiis pariatur a assumenda molestias iure
          voluptatum quis quos nemo, earum animi voluptas, ea ad quasi ipsam.
          Voluptatem? Assumenda laboriosam perferendis sint modi dicta,
          quibusdam, error similique cupiditate deleniti vitae ab consectetur
          ullam iusto ut eligendi provident maiores obcaecati quod culpa
          voluptatibus temporibus natus, est veritatis? Excepturi, accusantium!
          Libero ipsa quia blanditiis consectetur inventore neque illum vel
          quidem velit amet? Eius vero autem fuga unde, adipisci aspernatur
        </p>

        <p className="my-4">
          {" "}
          Provident hic natus neque possimus, ratione magni. A ex nihil corrupti
          aliquam adipisci! Vero corrupti, accusamus suscipit impedit laudantium
          hic architecto laborum, itaque maiores aliquid voluptatibus aspernatur
          voluptate veritatis perferendis! Consequatur dignissimos rerum aperiam
          iusto nihil doloribus? Eveniet molestiae voluptatem similique ratione
          nulla corrupti non modi, maiores dolor excepturi ipsam aliquam odio
          quam itaque aspernatur, repellendus, harum magnam? Quisquam,
          recusandae. Officia labore aut vero facere magni recusandae enim illum
          quaerat perferendis eaque tenetur libero quisquam sunt consequuntur
          cumque aliquam, distinctio in cum ex. Eaque tempore ut distinctio
          porro aspernatur eos. Sed illo autem in vel nobis quidem odit eveniet
          laboriosam reprehenderit. A quo nostrum eaque placeat sit, asperiores
          quas sint deleniti magni facere cumque qui aspernatur soluta
          recusandae ut illo. Exercitationem sit eaque delectus? Architecto
          laudantium voluptatum dignissimos unde consequuntur rerum eos
          molestias at deserunt itaque nobis suscipit incidunt magnam qui
        </p>
        <p className="my-4">
          Aut, fuga optio ex voluptate sunt voluptatem, excepturi tempore
          quibusdam a dolore amet repellat inventore quo sapiente sed numquam!
          Provident quibusdam, pariatur aliquid modi architecto accusamus ipsum
          magni sunt tempore? Sequi ipsum laudantium deserunt accusamus
          recusandae quo et, fuga velit nulla possimus laborum eligendi, aliquid
          officiis cum cupiditate fugiat, repudiandae magnam ad odit accusantium
          culpa. Libero quasi tempora doloribus nulla. Perspiciatis, natus.
          Ullam earum architecto possimus quos corrupti illum, iste vero odit
          ipsa quaerat modi maxime libero ipsam repudiandae porro assumenda
          fugit perspiciatis accusamus repellat sit sunt corporis labore
          numquam. Deserunt, at! Voluptatem, quae! Consequatur explicabo
          cupiditate labore id recusandae consectetur sequi eum obcaecati et
          alias ipsam vel enim ducimus, quaerat quas facere officia repudiandae?
          Architecto, explicabo delectus. Accusantium, aperiam. Aliquam
          explicabo itaque cum odio ipsa? Veniam, quis. Voluptatum eum animi
          omnis! Earum iure repellendus veritatis culpa fuga obcaecati vel,
          temporibus possimus doloremque aperiam nisi fugit, est expedita,
        </p>
      </div>
    </div>
  );
};

export default page;
