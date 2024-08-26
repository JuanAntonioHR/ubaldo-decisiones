import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const FieldArray = ({ label, items, setItems, placeholder, select = null, data = false }) => {
  const [categories, setCategories] = useState(items.map(() => ''));

  const handleArrayChange = (index, value) => {
    const updatedArray = [...items];
    updatedArray[index] = value;
    setItems(updatedArray);
  };

  const handleCategoryChange = (index, value, item) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
    handleArrayChange(index, [item, value]);
  };

  const handleAddField = () => {
    setItems([...items, '']);
    setCategories([...categories, '']);
  };

  const handleRemoveField = (index) => {
    const updatedArray = items.filter((_, i) => i !== index);
    const updatedCategories = categories.filter((_, i) => i !== index);
    setItems(updatedArray);
    setCategories(updatedCategories);
  };

  if (data) {
    return (
      <Form.Group className="d-grid mb-3">
        <Form.Label>{label}</Form.Label>
        {items.map((item, index) => (
          <InputGroup className="mb-2" key={index}>
            <Form.Control
              type="text"
              placeholder={placeholder}
              required
              value={item.description}
              onChange={(e) => handleArrayChange(index, { ...item, description: e.target.value })}
            />
            <Form.Control
              type="number"
              placeholder="Valor"
              required
              value={item.value}
              onChange={(e) => handleArrayChange(index, { ...item, value: e.target.value })}
            />
            <Button variant="danger" onClick={() => handleRemoveField(index)} disabled={items.length === 1} size="sm" className='d-flex'>
              <i className="material-icons">close</i>
            </Button>
          </InputGroup>
        ))}
        <Button variant="success" onClick={handleAddField} size="sm" className="mb-3 d-flex">
          <i className="material-icons mx-auto">add</i>
        </Button>
      </Form.Group>
    );
  }

  if (select) {
    return (
      <Form.Group className="d-grid mb-3">
        <Form.Label>{label}</Form.Label>
        {items.map((item, index) => (
          <InputGroup className="mb-2" key={index}>
            <Form.Control
              type="text"
              placeholder={placeholder}
              value={item[0]}
              onChange={(e) => handleArrayChange(index, [e.target.value, categories[index]])}
              required
            />
            <Form.Select
              aria-label="Category"
              value={categories[index]}
              onChange={(e) => handleCategoryChange(index, e.target.value, item[0])}
              required
            >
              <option value="">Seleccione una categoría</option>
              {select.map((option, idx) => (
                <option key={idx} value={option}>{option}</option>
              ))}
            </Form.Select>
            <Button variant="danger" onClick={() => handleRemoveField(index)} disabled={items.length === 1} size="sm" className='d-flex'>
              <i className="material-icons">close</i>
            </Button>
          </InputGroup>
        ))}
        <Button variant="success" onClick={handleAddField} size="sm" className="mb-3 d-flex">
          <i className="material-icons mx-auto">add</i>
        </Button>
      </Form.Group>
    );
  }

  return (
    <Form.Group className="d-grid mb-3">
      <Form.Label>{label}</Form.Label>
      {items.map((item, index) => (
        <InputGroup className="mb-2" key={index}>
          <Form.Control
            type="text"
            placeholder={placeholder}
            value={item}
            onChange={(e) => handleArrayChange(index, e.target.value)}
            required
          />
          <Button variant="danger" onClick={() => handleRemoveField(index)} disabled={items.length === 1} size="sm" className='d-flex'>
            <i className="material-icons">close</i>
          </Button>
        </InputGroup>
      ))}
      <Button variant="success" onClick={handleAddField} size="sm" className="mb-3 d-flex">
        <i className="material-icons mx-auto">add</i>
      </Button>
    </Form.Group>
  );
};

export default FieldArray;