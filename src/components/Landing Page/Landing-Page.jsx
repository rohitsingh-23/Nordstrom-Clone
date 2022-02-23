import { P21B, P15U, P15, P15B } from "../ReUsable Components/Font/Font";
import "./LandingPage.css"
import { Carousel } from "react-bootstrap";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="TopNav">
        <P21B>Shop what you love—faster and easier.</P21B>
        <button>Sign In Create an Account</button>
      </div>
      <div className="discount">
        <img
          src="https://n.nordstrommedia.com/id/fde215f0-9c8e-47fb-9942-87d76f73c337.jpeg?h=200&w=1608"
          alt="Get a $60 Bonus Note! Ends February 28."
        />
        <div>
          <P21B>Get a $60 Bonus Note! Ends February 28.</P21B>
          <P15>
            Don't miss this limited-time offer for new Nordstrom credit
            cardmembers. Restrictions apply.
          </P15>
          <P15U>Apply Now</P15U>
        </div>
      </div>
      <div className="topCrousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/65b378f3-4030-4ec1-8eca-48f44017c9a9.png?h=400&w=1608"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/7e108bff-7a6a-4622-a140-7d59b87fa526.png?h=400&w=1608"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="SecCrousel">
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/d116141a-80b8-4cb4-87af-237f608a1873.jpeg?h=400&w=1608"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/0d80fff5-6f84-472a-98ed-d21af6b985a3.jpeg?h=400&w=1608"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <P21B>SHOP BY CATEGORIES</P21B>
      </div>

      <div className="category">
        <div>
          <img
            src="https://n.nordstrommedia.com/id/bcf8f4f3-1f56-446a-a5c6-45b51e348801.jpeg?h=365&w=268"
            alt=""
          />
          <P15B>Women</P15B>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/90631b6f-f991-4e8c-bdac-a5133520450a.jpeg?h=365&w=268"
            alt=""
          />
          <P15B>Men</P15B>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/4fe1c4fc-f81b-4ccf-a661-2c0b5fef6dc7.jpeg?h=365&w=268"
            alt=""
          />
          <P15B>Kids</P15B>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/e4a1a210-0e30-4960-98df-1aee973a2a8f.jpeg?h=365&w=268"
            alt=""
          />
          <P15B>Home</P15B>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/c72df99d-147e-45a5-838f-55cfd0e72fd2.jpeg?h=365&w=268"
            alt=""
          />
          <P15B>Beauty & Fragrance</P15B>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/b329b17c-e3b9-47c9-adfe-975592541179.jpeg?h=365&w=268"
            alt=""
          />
          <P15B>Designer</P15B>
        </div>
      </div>
      <div className="GearPoster">
        <img
          src="https://n.nordstrommedia.com/id/156f0c29-2f6f-4b89-b1e2-6ac5b3e90176.jpeg?h=600&w=1608"
          alt=""
        />
      </div>
      <div className="openEdit">
        <div>
          <img
            src="https://n.nordstrommedia.com/id/22be3367-3ee8-4b4e-af7a-53a7d1c28727.jpeg?h=600&w=804"
            alt=""
          />
          <P21B>Open Edit: The Work Remix</P21B>
          <P15>A new spring collection to refresh your on-the-clock fits. </P15>
          <P15>
            Nordstrom Made:
            <P15U>All Women</P15U>
          </P15>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/1e11880c-21f9-4e61-a722-741e662f88e0.jpeg?h=600&w=804"
            alt=""
          />
          <P21B>Fashion Trends Under $50</P21B>
        </div>
      </div>
      <div className="freeStyle">
        <img
          src="https://n.nordstrommedia.com/id/56db20e9-bad3-4f73-b83f-1c35a854e856.jpeg?h=400&w=1608"
          alt=""
        />
      </div>
    </div>
  );
};
