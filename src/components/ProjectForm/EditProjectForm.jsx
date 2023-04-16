// IMPORT STATEMENTS
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// EDIT PROJECT FORM COMPONENT
function EditProjectForm() {
  // GET PROJECT ID PARAMETER FROM URL
  const { id } = useParams();


  // STATE HOOKS
  const [project, setProject] = useState({
    title: '',
    description: '',
    goal: '',
    image: '',
    deadline: '',
    is_open: '',
  });

      // ------- HOOKS -------
      const navigate = useNavigate();

  // FETCH PROJECT DATA FROM API
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}/`);
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        const data = await response.json();
        setProject({
          title: data.title,
          description: data.description,
          goal: data.goal,
          image: data.image,
          deadline: data.deadline,
          is_open: data.is_open,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchProject();
  }, [id]);

  // HANDLE CHANGE FUNCTION
  const handleChange = (event) => {
    const { id, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      deadline: new Date(value).toISOString().slice(0, 16),
      [id]: value,
    }));
  };

  // HANDLE SUBMIT FUNCTION
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}/`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(project),
      });
      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }
      navigate(`/projects/${id}/`);
    } catch (error) {
      console.error(error);
    }
  };

  // RENDER EDIT PROJECT FORM
  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Project</h1>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" defaultValue={project.title} onChange={handleChange} />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={project.description}
        onChange={handleChange}
        placeholder="Enter project description..."
      />
      <label htmlFor="goal">Goal</label>
      <input type="number" id="goal" defaultValue={project.goal} onChange={handleChange} />
      <label htmlFor="image">Image URL</label>
      <input type="text" id="image" defaultValue={project.image} onChange={handleChange} />
      <label htmlFor="deadline">Deadline</label>
      <input type="datetime-local" id="deadline" defaultValue="2023-01-28T14:14" onChange={handleChange} />


      <div style={{ display: 'flex', alignItems: 'center'}}>

        <label htmlFor="is_open">Activate</label>
        <input
          type="checkbox"
          id="is_open"
          checked={project.is_open}
          onChange={() => setProject((prevProject) => ({ ...prevProject, is_open: !prevProject.is_open }))}
        />
        <span>{project.is_open ? 'Open' : 'Closed'}</span>
      </div>
        <button type="submit">Edit Project</button>
    </form>
);
}

export default EditProjectForm;
