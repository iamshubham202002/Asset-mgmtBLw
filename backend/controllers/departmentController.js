import Department from '../model/Department.js';

export const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find({});
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createDepartment = async (req, res) => {
  const { name } = req.body;
  try {
    const department = new Department({ name });
    const savedDepartment = await department.save();
    res.status(201).json(savedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateDepartment = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedDepartment = await Department.findByIdAndUpdate(
      id,
      { name },
      { new: true } // returns updated doc
    );

    if (!updatedDepartment) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteDepartment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDepartment = await Department.findByIdAndDelete(id);

    if (!deletedDepartment) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
