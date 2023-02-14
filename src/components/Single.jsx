import { FaStar } from "react-icons/fa";

function Single({ single }) {
  return (
    <div className="card mb-1 mt-3 p-2 text-black border border-3 rounded-0">
      <div className="row g-0">
        <img
          src={single.image_uris.normal}
          className="img-fluid rounded-start"
          alt={single.name}
        />

        <div className="col-md-8 ">
          <div className="card-body ">
            <h5 className="card-title">{single.name}</h5>

            <button className="border-0 bg-white">
              <FaStar color="gold" />
            </button>
            <p className="card-text">
              <small className="fw-light">#{single.collector_number}/143</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Single;
{
  /* <div className="text-center p-5">
      <h4 className="fst-italic p-2">{single.name}</h4>
      <img className="" src={single.image_uris.small} alt={single.name} />
      <p className="fs-6 fw-light">#{single.collector_number}</p>
    </div>
 */
}
{
  /* <div className ="fst-italic p-2 width: 18rem;">
  <img src={single.image_uris.small} class="card-img-top" alt="" />
  <div className="card-body">
    <h5 className={single.name}>Card title</h5>
    <p className="card-text">#{single.collector_number}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
    </div> */
}
