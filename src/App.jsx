import "./App.css";

function App() {
  return (
    <>
      <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-br/and" href="#myPage">
                Mari Sanchez
              </a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#myPage">INICIO</a>
                </li>
                <li>
                  <a href="#band">LOGROS</a>
                </li>
                <li>
                  <a href="#tour">PARIS</a>
                </li>
                <li>
                  <a href="#contact">PODIO</a>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    MAS
                    <span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">Merchandise</a>
                    </li>
                    <li>
                      <a href="#">Extras</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="glyphicon glyphicon-search"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#myCarousel"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.Xqo5N2f525_0lPQTXFFQXQHaGL&pid=Api&P=0&h=180"
                width="3000"
                height="700"
              />
              <div className="carousel-caption">
                <h3>PARIS</h3>
                <p>
                Katie Ledecky es una nadadora estadounidense que ha ganado notoriedad mundial por sus excepcionales logros en la piscina. Nacida el 17 de marzo de 1997 en Washington D.C., Ledecky ha sido reconocida como una de las nadadoras más dominantes de su generación, destacándose por sus habilidades en pruebas de larga distancia.
                </p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://ds-images.bolavip.com/news/image?src=https%3A%2F%2Fimages.bolavip.com%2Fwebp%2Fco%2Ffull%2FBCO_20240809_BCO_102396_mari-sa-e1723235548292.webp&width=470&height=352"
                width="3000"
                height="700"
              />
              <div className="carousel-caption">
                <h3>PARIS</h3>
                <p>
                  Los Juegos Olímpicos de París 2024 marcan la tercera vez que
                  la capital francesa alberga este evento, habiéndolo hecho
                  anteriormente en 1900 y 1924. Estos juegos son especialmente
                  significativos porque se celebr/an 100 años después de la
                  última vez que París fue sede olímpica.
                </p>
              </div>
            </div>

            <div className="item">
              <img
                src="https://www.wradio.com.co/resizer/v2/CG246QRL35GYPAJWXZI7NM2BOY.jpg?auth=09f062d86cf748efa8c4c9d2bce7d99e49a8508a79cd1fd978b1a1723d5d3359&width=650&height=488&quality=70&smart=true"
                alt="Los Angeles"
                width="3000"
                height="700"
              />
              <div className="carousel-caption">
                <h3>PARIS</h3>
                <p>
                  París 2024 se enfoca en la sostenibilidad y la innovación.
                  Muchas de las competencias se llevarán a cabo en lugares
                  icónicos de la ciudad, como el Estadio de Francia, el Grand
                  Palais, y la Torre Eiffel. Además, los Juegos presentan nuevos
                  deportes como el br/eakdance, que hará su debut olímpico,
                  junto con otros deportes populares como el surf y el
                  skateboard.
                </p>
              </div>
            </div>
          </div>

          <a
            className="left carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div id="band" className="container text-center">
          <h3>Katie Ledecky</h3>
          <p>
            <em></em>
          </p>
          <p>
          Katie Ledecky compitió en los 200 metros estilo libre, una prueba en la que ha demostrado ser altamente competitiva a lo largo de su carrera. A pesar de la fuerte competencia, Ledecky finalizó en la [posición final] y ganó [medalla] con un tiempo de [tiempo registrado]. Esta actuación reflejó su capacidad para competir en distancias más cortas, además de las pruebas de larga distancia en las que ha sido tradicionalmente dominante.
          </p>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <p className="text-center">
                <strong></strong>
              </p>
              <br />
              <a href="#demo" data-toggle="collapse">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.cryrvhdKH0weehr8pj4XaQHaEK&pid=Api&P=0&h=180"
                  className="img-circle person"
                  alt="Random Name"
                  width="285"
                  height="250"
                />
              </a>
              <br />
              <br />
              <div id="demo" className="collapse">
                <p>Pasión</p>
                <p>Fuerza</p>
                <p>Resiliencia</p>
              </div>
            </div>
            <div className="col-sm-4">
              <p className="text-center">
                <strong></strong>
              </p>
              <br />
              <a href="#demo2" data-toggle="collapse">
                <img
                  src="https://tse1.mm.bing.net/th?id=OIP.sD369B6lRqyVfiDLFQKrwwHaEL&pid=Api&P=0&h=180"
                  className="img-circle person"
                  alt="Random Name"
                  width="285"
                  height="250"
                />
              </a>
              <br />
              <br />

              <div id="demo2" className="collapse">
                <p>Determinación</p>
                <p>Persistencia</p>
                <p>Disciplina</p>
              </div>
            </div>
            <div className="col-sm-4">
              <p className="text-center">
                <strong></strong>
              </p>
              <br />
              <a href="#demo3" data-toggle="collapse">
                <img
                  src="https://d1qxviojg2h5lt.cloudfront.net/images/01FBM2CQRNWWQXT4GQG74F6X2V/katie-ledecky-gold-medals.webp"
                  className="img-circle person"
                  alt="Random Name"
                  width="285"
                  height="250"
                />
              </a>
              <br />
              <br />
              <div id="demo3" className="collapse">
                <p>Esfuerzo</p>
                <p>Coraje</p>
                <p>Confianza</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2 className="text-center">PARIS FRANCIA</h2>
        <br />

        <div id="tour" className="bg-1">
          <div className="container">
            <h3 className="text-center"></h3>
            <p className="text-center">
              .<br />
            </p>

            <div className="row text-center">
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IBc_kzg3BvO-l3z_a5_5dTYvJTtucigk_g&s"
                    alt="Paris"
                    width="400"
                    height="300"
                  />
                  <p>
                    <strong>PARIS</strong>
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMQFjfkpDfzVnEqGnT0FYQMmlsrSzUbCRsKQ&s"
                    alt="New York"
                    width="400"
                    height="300"
                  />
                  <p>
                    <strong>PARIS</strong>
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="thumbnail">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWq0-qGOuxrwHXTjDa0Hsigmjj2vdIBSH5Q&s"
                    alt="San Francisco"
                    width="400"
                    height="300"
                  />
                  <p>
                    <strong>PARIS</strong>
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  <h4>
                    <span className="glyphicon glyphicon-lock"></span> Tickets
                  </h4>
                </div>
                <div className="modal-body">
                  <form role="form">
                    <div className="form-group">
                      <label for="psw">
                        <span className="glyphicon glyphicon-shopping-cart"></span>{" "}
                        Tickets, $23 per person
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        id="psw"
                        placeholder="How many?"
                      />
                    </div>
                    <div className="form-group">
                      <label for="usrname">
                        <span className="glyphicon glyphicon-user"></span> Send
                        To
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="usrname"
                        placeholder="Enter email"
                      />
                    </div>
                    <button type="submit" className="btn btn-block">
                      Pay
                      <span className="glyphicon glyphicon-ok"></span>
                    </button>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-danger btn-default pull-left"
                    data-dismiss="modal"
                  >
                    <span className="glyphicon glyphicon-remove"></span> Cancel
                  </button>
                  <p>
                    Need <a href="#">help?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div id="contact" className="container">
          <h2 className="text-center">
            Top 10 Países - Juegos Olímpicos París 2024
          </h2>
          <br />
          <br />
          <br />

          <table />
          <table>
            <tr>
              <hr />
              <th>Posición</th>
              <th>País</th>
              <th>Oro</th>
              <th>Plata</th>
              <th>br/once</th>
              <th>Total</th>
            </tr>
            <br />
            <tr>
              <td>1</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/us.png"
                  alt="USA"
                  className="flag"
                />
                Estados Unidos
              </td>
              <td>35</td>
              <td>28</td>
              <td>22</td>
              <td className="total">85</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/cn.png"
                  alt="China"
                  className="flag"
                />
                China
              </td>
              <td>33</td>
              <td>26</td>
              <td>24</td>
              <td className="total">83</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/jp.png"
                  alt="Japón"
                  className="flag"
                />
                Japón
              </td>
              <td>30</td>
              <td>30</td>
              <td>20</td>
              <td className="total">80</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/ru.png"
                  alt="Rusia"
                  className="flag"
                />
                Rusia
              </td>
              <td>28</td>
              <td>25</td>
              <td>27</td>
              <td className="total">80</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/gb.png"
                  alt="Reino Unido"
                  className="flag"
                />
                Reino Unido
              </td>
              <td>25</td>
              <td>20</td>
              <td>30</td>
              <td className="total">75</td>
            </tr>
            <tr>
              <td>6</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/de.png"
                  alt="Alemania"
                  className="flag"
                />
                Alemania
              </td>
              <td>24</td>
              <td>22</td>
              <td>27</td>
              <td className="total">73</td>
            </tr>
            <tr>
              <td>7</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/kr.png"
                  alt="Corea del Sur"
                  className="flag"
                />
                Corea del Sur
              </td>
              <td>23</td>
              <td>24</td>
              <td>25</td>
              <td className="total">72</td>
            </tr>
            <tr>
              <td>8</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/fr.png"
                  alt="Francia"
                  className="flag"
                />
                Francia
              </td>
              <td>22</td>
              <td>23</td>
              <td>26</td>
              <td className="total">71</td>
            </tr>
            <tr>
              <td>9</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/it.png"
                  alt="Italia"
                  className="flag"
                />
                Italia
              </td>
              <td>20</td>
              <td>25</td>
              <td>24</td>
              <td className="total">69</td>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <img
                  src="https://flagcdn.com/w320/au.png"
                  alt="Australia"
                  className="flag"
                />
                Australia
              </td>
              <td>18</td>
              <td>20</td>
              <td>28</td>
              <td className="total">66</td>
            </tr>
          </table>

          {/*      <img src="map.jpg" className="img-responsive" style="width:100%"/> */}
          <footer className="text-center">
            <a
              className="up-arrow"
              href="#myPage"
              data-toggle="tooltip"
              title="TO TOP"
            >
              <span className="glyphicon glyphicon-chevron-up"></span>
            </a>
            <br />
            <br />
            <p>
              Bootstrap Theme Made By{" "}
              <a
                href="https://www.w3schools.com"
                data-toggle="tooltip"
                title="Visit w3schools"
              >
                www.w3schools.com
              </a>
            </p>
          </footer>

          {/*   <script>
   { $(document).ready(function(){
      // Initialize Tooltip
      $('[data-toggle="tooltip"]').tooltip(); 
      
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
  
          // Prevent default anchor click behavior
          event.preventDefault();
  
          // Store hash
          var hash = this.hash;
  
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
  
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
    })}
    </script> */}
        </div>
      </div>
    </>
  );
}

export default App;
