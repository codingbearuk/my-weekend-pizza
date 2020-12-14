"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var title_1 = __importDefault(require("components/UI/title"));
var language_sources_1 = __importDefault(require("language-sources"));
var react_bootstrap_icons_1 = require("react-bootstrap-icons");
var separator_1 = __importDefault(require("components/UI/separator"));
var how_to_find_us_styled_1 = require("./how-to-find-us.styled");
var View = function (p) {
    return (<how_to_find_us_styled_1.Container id={p.id}>
      <title_1.default imageName='map.svg'>{language_sources_1.default.howToFindUs.title}</title_1.default>
      <how_to_find_us_styled_1.ContentContainer>
        <how_to_find_us_styled_1.MapContainer>
          <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d599.6342363557985!2d-2.993928170755841!3d53.04665899874483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDAyJzQ4LjAiTiAywrA1OSczNi4yIlc!5e0!3m2!1spl!2suk!4v1605270563757!5m2!1spl!2suk' width='600' height='450' aria-hidden='false'></iframe>
        </how_to_find_us_styled_1.MapContainer>
        <how_to_find_us_styled_1.DetailsContainer>
          <h2>{p.details.title}</h2>
          <h3>{p.details.address}</h3>
          <h3>{p.details.city}</h3>
          <h3>{p.details.postcode}</h3>
          <separator_1.default height={30}/>
          <div>
            <react_bootstrap_icons_1.PhoneFill />
            <separator_1.default width={5}/>
            <p>{p.details.phone}</p>
          </div>
          <div>
            <react_bootstrap_icons_1.At />
            <separator_1.default width={5}/>
            <p>{p.details.email}</p>
          </div>
        </how_to_find_us_styled_1.DetailsContainer>
      </how_to_find_us_styled_1.ContentContainer>
    </how_to_find_us_styled_1.Container>);
};
exports.default = View;
