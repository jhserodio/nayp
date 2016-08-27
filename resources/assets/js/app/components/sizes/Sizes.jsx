import React, { Component } from 'react';

export default class Sizes extends Component {
  render() {
    return (

      <div className="info-np">
        <div className="container">

          <nav className="nav_tab">
            <ul className="reset">
              <li><a className="active" href="#">men's top</a></li>
              <li><a href="#">men's bottoms</a></li>
              <li><a href="#">women's top</a></li>
              <li><a href="#">women's bottom</a></li>
            </ul>
          </nav>

          <div className="size_model">

            <h2 className="title-base">
              1º passo / <br />
              medidas
            </h2>

            <div className="_content">

              <div className="_image">
                <img src="public/img/manequin.png" alt="" />
              </div>

              <ul className="_menu">
                <li>
                  <p>
                    <strong>
                      A. PEITO
                    </strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="_marker _a">a</span>
                </li>
                <li>
                  <p>
                    <strong>
                      B. ALTURA DO TRONCO
                    </strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="_marker _b">b</span>
                </li>
                <li>
                  <p>
                    <strong>
                      C. MEDIDA DO BRAÇO
                    </strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <span className="_marker _c">c</span>
                </li>
              </ul>

            </div>

          </div>

          <h2 className="title-base">
            2º passo / <br />
            encontre o tamanho certo
          </h2>
          <table className="size_table">
            <thead>
              <tr>
                <th>

                  Medidas
                  <br />
                  em cm
                </th>
                <th>
                  a.<br />
                  peito<br />
                </th>
                <th>
                  b.<br />
                  autura do<br />
                  tronco
                </th>
                <th>
                  c.<br />
                  medida do<br />
                  braço
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>xp</td>
                <td>74 - 81</td>
                <td>82 - 89</td>
                <td>90 - 98</td>
              </tr>
              <tr>
                <td>p</td>
                <td>74-81</td>
                <td>82-89</td>
                <td>90-98</td>
              </tr>
              <tr>
                <td>m</td>
                <td>74-81</td>
                <td>82-89</td>
                <td>90-98</td>
              </tr>
              <tr>
                <td>g</td>
                <td>74-81</td>
                <td>82-89</td>
                <td>90-98</td>
              </tr>
              <tr>
                <td>xg</td>
                <td>74-81</td>
                <td>82-89</td>
                <td>90-98</td>
              </tr>
              <tr>
                <td>xxg</td>
                <td>74-81</td>
                <td>82-89</td>
                <td>90-98</td>
              </tr>
            </tbody>
          </table>

          <div>
            <div className="info-content">
              <p>
                - Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur fuga quisquam assumenda et est officia, quaerat illum eius,
                ipsum quas iste corporis pariatur reiciendis distinctio repudiandae
              </p>
              <p>
                - quaerat illum eius, ipsum quas iste corporis pariatur reiciendis
                 distinctio repudiandae voluptate odio voluptatibus neque.
              </p>
              <p>
                - ing elit. Tenetur fuga quisquam assumenda et est officia, quaerat illum eius,
                ipsum quas iste corporis pariatur reiciendis distinctio
              </p>
            </div>

            <h2 className="title-base">
              dúvidas?
            </h2>
            <small>
              quaerat illum eius, ipsum quas iste corporis pariatur reiciendis
              distinctio repudiandae voluptate odio voluptatibus neque.
            </small>
            <br />
            <br />

            <a href="#" className="reset">
              <button className="btn-full">
                clique aqui e fale conosco
              </button>
            </a>
          </div>

        </div>
      </div>


    );
  }
}
