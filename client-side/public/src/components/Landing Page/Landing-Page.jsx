import { P21B, P15U, P15, P15B } from "../ReUsable Components/Font/Font";
// import {SqButton} from "../ReUsable Components/buttons/Button"
import "./LandingPage.css";
import { Carousel } from "react-bootstrap";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Navbar />
      <div className="TopNav">
        <P21B>Shop what you love—faster and easier.</P21B>
        <button className="HomeSignIn">Sign In Create an Account</button>
        {/* <SqButton width={{h}} height={"200px"}>Sign In Create an Account</SqButton> */}
      </div>
      <div className="discount">
        <img
          src="https://n.nordstrommedia.com/id/fde215f0-9c8e-47fb-9942-87d76f73c337.jpeg?h=200&w=1608"
          alt="Get a $60 Bonus Note! Ends February 28."
        />
        <div className="discountData">
          <P21B>Get a $60 Bonus Note! Ends February 28.</P21B>
          <P15>
            Don't miss this limited-time offer for new Nordstrom credit
            cardmembers. Restrictions apply.
          </P15>
          <P15U>Apply Now</P15U>
        </div>
      </div>
      <div className="Fashion_Crousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/9527cf98-e9e2-4d92-ab9e-b717d151e108.jpeg?h=600&w=1608"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>
                Nordstrom at Fashion Week Fall Winter 2022. Follow along for the
                latest runway coverage and inspo from fashion's major cities.
              </p>
              <div className="fashionweek_text">
                <p>Explore Fashion Week</p>
                <p>Shop Designer</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/106c1431-3431-4cf9-bc1e-23371ced57b7.jpeg?h=600&w=1608"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h4>
                Discover{" "}
                <h3
                  style={{
                    display: "inline",
                  }}
                >
                  Spring Fashion
                </h3>
              </h4>
              <p>
                Look ahead in the season's boldest and brightest designer
                fashion.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://n.nordstrommedia.com/id/a4b8cc97-1efd-4507-8a1b-d5658189f2bc.jpeg?h=600&w=1608"
              alt="Third slide"
            />

            <Carousel.Caption>
              <P21B>The Return of Romance</P21B>
              <P15>
                Sweet prints, feminine silhouettes and the prettiest color
                palette—spring signals the arrival of swoon-worthy pieces for
                all your special occasions.
              </P15>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="BtsTheamed">
        <img
          src="https://n.nordstrommedia.com/id/2c4acf4f-ce15-428b-bf45-8f0a006834b9.jpeg?h=400&w=1608"
          alt=""
        />
        <div className="BtsTheamed_data">
          <P21B>BTS THEMED MERCH IS HERE!</P21B>
          <p>BTS 테마 상품 출시!</p>
          <P15>
            You can now find your favorite artists' tees, hoodies, stickers and
            more at Nordstrom—including items inspired by their mega hit song
            "Butter." Official merchandise produced by HYBE.
          </P15>
          <P15U>BTS THEAMED MERCH</P15U>
        </div>
      </div>
      {/* //winter discount */}
      <div className="WinterDiscount">
        <img
          src="https://n.nordstrommedia.com/id/65b378f3-4030-4ec1-8eca-48f44017c9a9.png?h=400&w=1608"
          alt=""
        />
        <div className="WinterDiscount_data">
          <P21B>THROUGH FEBRUARY 27</P21B>
          <P15>
            Save on best-selling brands, including Zella, Nike, UGG and more.
          </P15>
          <div style={{ display: "flex" }}>
            {/* <P15>Sale</P15>
                  <P */}
          </div>
        </div>
      </div>
      {/* //shop by category */}
      <div className="category_title">
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

      <div className="twoBigBox">
        <div className="spotlight">
          <img
            src="https://n.nordstrommedia.com/id/f80208ff-1d53-4a44-8d64-16a88d6d6078.jpeg?h=600&w=804"
            alt=""
          />
          <div className="spotlight_data">
            <P21B>Spotlight-Worthy Prom Looks </P21B>
            <P15>
              From elegant gowns to chic suits, dance the night away in the
              perfect prom looks for under $150.
            </P15>
          </div>
        </div>
        <div className="diamond">
          <img
            src="https://n.nordstrommedia.com/id/6bdcc203-d4ce-4128-ac3b-36f0e4d5ef5f.jpeg?h=600&w=804"
            alt=""
          />
          <div className="spotlight_data">
            <P21B>Diamond Classics Redefined</P21B>
            <P15>
              Sparkle in fresh designs from Bony Levy, HauteCarat and more.
            </P15>
          </div>
        </div>
      </div>

      <div className="pangaia">
        <img
          src="https://n.nordstrommedia.com/id/8fbcf994-0345-4089-8a6b-c35385f6e958.jpeg?h=400&w=1608"
          alt=""
        />
        <div className="pangaia_data">
          <P15>
            PANGAIA is a materials science company on a mission to save our
            environment. PANGAIA creates essential products from innovative tech
            and bioengineered materials.
          </P15>
        </div>
      </div>

      <div className="blackHistory">
        <img
          src="https://n.nordstrommedia.com/id/b48226b3-5e87-4faa-98e5-63b0ebbc00f0.jpeg?h=400&w=1608"
          alt=""
        />
        <div className="blackHistory_data">
          <p style={{ color: "white" }}>
            Honoring the Black community, rejoicing in Black culture and
            amplifying Black voices. In February and beyond, look for
            opportunities to shop Black-owned, -founded and -designed brands.
            Visit our Diversity, Inclusion & Belonging page to join the
            celebration and learn about our commitments.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

//  <div className="topCrousel">
//         <Carousel variant="dark">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://n.nordstrommedia.com/id/65b378f3-4030-4ec1-8eca-48f44017c9a9.png?h=400&w=1608"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <div>
//                 <P21B>THROUGH FEBRUARY 27 </P21B>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://n.nordstrommedia.com/id/7e108bff-7a6a-4622-a140-7d59b87fa526.png?h=400&w=1608"
//               alt="Second slide"
//             />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       <div className="SecCrousel">
//         <Carousel variant="dark">
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://n.nordstrommedia.com/id/d116141a-80b8-4cb4-87af-237f608a1873.jpeg?h=400&w=1608"
//               alt="First slide"
//             />
//             <Carousel.Caption>
//               <h3>First slide label</h3>
//               <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src="https://n.nordstrommedia.com/id/0d80fff5-6f84-472a-98ed-d21af6b985a3.jpeg?h=400&w=1608"
//               alt="Second slide"
//             />

//             <Carousel.Caption>
//               <h3>Second slide label</h3>
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </div>

{
  /* <div className="GearPoster">
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
      </div> */
}
