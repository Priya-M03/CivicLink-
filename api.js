const API_BASE_URL = "http://localhost:5000";

export const getComplaints = async () => {
  const response = await fetch(`${API_BASE_URL}/api/complaints`);
  return response.json();
};