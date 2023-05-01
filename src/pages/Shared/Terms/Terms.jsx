import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="container mt-5">
      <h2 className=" text-center">Terms and conditions</h2>
      <p className="my-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum
        commodi sint quod blanditiis consequatur quibusdam. Voluptatibus, cum
        minima ipsam culpa vel expedita adipisci perspiciatis tempore minus
        eius. Exercitationem natus iste quaerat delectus cumque molestiae
        pariatur et impedit esse incidunt? Tempora praesentium enim cum rerum
        dolore, quasi consequatur libero consequuntur alias natus minima ut
        consectetur blanditiis sunt soluta corporis esse, voluptatibus excepturi
        quibusdam animi dicta est! Perferendis praesentium minus dolores
        mollitia eligendi esse fugit error odit officiis! Alias consequuntur ab
        saepe mollitia deserunt veritatis ad officia excepturi rem doloribus non
        odit cum blanditiis quidem ipsam quasi labore voluptatum, illo,
        voluptate veniam reiciendis nostrum qui. Eum rem ratione nostrum
        provident iusto ea quam repellendus aut commodi magnam nesciunt unde
        iste, porro, quae odio doloribus, dolore aspernatur laudantium! Expedita
        eius architecto repellat magnam voluptatem nesciunt animi nihil, debitis
        blanditiis mollitia quod minus ad, nobis at praesentium autem sit iusto
        qui consequuntur obcaecati.
      </p>
      <p>
        Go back to{" "}
        <Link className="ms-1 fw-semibold text-success text-decoration-none" to="/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Terms;
