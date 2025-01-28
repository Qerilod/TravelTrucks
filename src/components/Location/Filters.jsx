import { Field, Formik, Form } from "formik";
import s from "./Filters.module.css";
import icons from "../../images/icons/icons.svg";
const Filters = () => {
  return (
    <div className={s.filtersCon}>
      <div className={s.locationCon}>
        <p className={s.textCon}>Location</p>
        <Formik>
          <Form className={s.form}>
            <div className={s.svgLocation}>
              <svg className={s.iconLocation}>
                <use href={`${icons}#Map`}></use>
              </svg>
            </div>
            <Field
              type="text"
              name="name"
              placeholder="Kyiv, Ukraine"
              className={s.input}
            />
          </Form>
        </Formik>
      </div>
      <div className={s.VehicleCon}>
        <p className={s.textFCon}>Filters</p>
        <h3 className={s.title}>Vehicle equipment</h3>
        <div className={s.equipmentCon}>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#wind`}></use>
            </svg>
            AC
          </button>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#diagram`}></use>
            </svg>
            Automatic
          </button>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#cup-hot`}></use>
            </svg>
            Kitchen
          </button>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#tv`}></use>
            </svg>
            TV
          </button>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#ph_shower`}></use>
            </svg>
            Bathroom
          </button>
        </div>
        <h3 className={s.title}>Vehicle type</h3>
        <div className={s.typeCon}>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#bi_grid-1x2`}></use>
            </svg>
            Van
          </button>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#bi_grid`}></use>
            </svg>
            Fully Integrated
          </button>
          <button className={s.button}>
            <svg className={s.icon}>
              <use href={`${icons}#bi_grid-3x3-gap`}></use>
            </svg>
            Alcove
          </button>
        </div>
        <button className={s.sendButton}>Search</button>
      </div>
    </div>
  );
};

export default Filters;

// завтра потрібно:
// 1 іконки спрайт, +
//     2 стилі
// наступний компонент сторінки + стилі та інше
