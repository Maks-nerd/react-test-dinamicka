// Модули
import PropTypes from 'prop-types';

const FrequencyForm = ({ text, hadleChangeRight, handleAddRandomText }) => {
  return (
    <form>
      <label from="symbol">
        <h2>Enter your text</h2>
      </label>
      <div className="row mt-2 mb-3">
        <div className="col-12">
          <textarea
            type="text"
            name="symbol"
            id="symbol"
            className="form-control"
            rows="5"
            required
            value={text}
            onChange={hadleChangeRight}
          ></textarea>
        </div>
      </div>
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleAddRandomText}
      >
        Add random text
      </button>
    </form>
  );
};

FrequencyForm.propTypes = {
  text: PropTypes.string.isRequired,
  hadleChangeRight: PropTypes.func.isRequired,
  handleAddRandomText: PropTypes.func.isRequired,
};

export default FrequencyForm;
