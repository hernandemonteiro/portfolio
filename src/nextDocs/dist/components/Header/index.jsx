"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ai_1 = require("react-icons/ai");
const fa_1 = require("react-icons/fa");
const go_1 = require("react-icons/go");
function HeaderNextDocs(props) {
    return props.customHeader ? (props.customHeader) : (<header style={{
            display: "flex",
            // criar lógica paa mudar de cor conforme theme
            backgroundColor: "#3d3333" || "#070708",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "2%",
            borderBottom: "1px solid rgba(0,0,0,0.3)",
        }}>
      <div style={{
            width: "50%",
        }}>
        <a href={"/docs"} style={{
            color: "white",
            textTransform: "uppercase",
        }}>
          {props.logo || "Your app name!"}
        </a>
      </div>

      <div style={{
            width: "50%",
            textAlign: "right",
            color: "white",
            fontSize: "1.5em",
        }}>
        {/* definir método para trocar dark light */}
        {/* {store("theme") === true && (
          <FiMoon
            style={{ margin: "1%" }}
            onClick={() => {
              store("theme", false);
              window.location.reload();
            }}
          />
        )}
        {store("theme") === false && (
          <FiSun
            style={{ margin: "1%" }}
            onClick={() => {
              store("theme", true);
              window.location.reload();
            }}
          />
        )} */}
        {props.github && (<a href={props.github} target="_blank" rel="noreferrer">
            <ai_1.AiFillGithub style={{ margin: "1%" }}/>
          </a>)}
        {props.facebook && (<a href={props.facebook} target="_blank" rel="noreferrer">
            <ai_1.AiFillFacebook style={{ margin: "1%" }}/>
          </a>)}
        {props.instagram && (<a href={props.instagram} target="_blank" rel="noreferrer">
            <ai_1.AiFillInstagram style={{ margin: "1%" }}/>
          </a>)}
        {props.linkedin && (<a href={props.linkedin} target="_blank" rel="noreferrer">
            <ai_1.AiFillLinkedin style={{ margin: "1%" }}/>
          </a>)}
        {props.discord && (<a href={props.discord} target="_blank" rel="noreferrer">
            <fa_1.FaDiscord style={{ margin: "1%" }}/>
          </a>)}
        {props.website && (<a href={props.website} target="_blank" rel="noreferrer">
            <go_1.GoBrowser style={{ margin: "1%" }}/>
          </a>)}
      </div>
    </header>);
}
exports.default = HeaderNextDocs;
