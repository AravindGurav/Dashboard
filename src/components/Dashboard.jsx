import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const Dashboard = () => {
  const stats = [
    { title: "Total Projects", value: 5 },
    { title: "Completed", value: 1 },
    { title: "Ongoing", value: 3 },
    { title: "Delayed", value: 1, alert: true },
    { title: "Employees", value: 5 },
  ]

  const revenueData = [
    { date: "19 June", revenue: 1000 },
    { date: "20 June", revenue: 3000 },
    { date: "21 June", revenue: 3500 },
    { date: "22 June", revenue: 5000 },
    { date: "23 June", revenue: 5500 },
    { date: "24 June", revenue: 6500 },
    { date: "25 June", revenue: 7000 },
  ]

  const budgetData = [
    { name: "Over Budget", value: 19, color: "#e63946" },
    { name: "On Budget", value: 33, color: "#ffbe0b" },
    { name: "Under Budget", value: 48, color: "#06d6a0" },
  ]

  const teamMood = [
    { name: "Andrea", role: "UX Junior", mood: "😊" },
    { name: "Alvaro", role: "Back-end Dev", mood: "😎" },
    { name: "Juan", role: "UX Senior", mood: "🙂" },
    { name: "Jose", role: "Marketing", mood: "😐" },
    { name: "Maria", role: "UX Intern", mood: "😕" },
  ]

  const projects = [
    {
      name: "Insurance App",
      budget: 70000,
      profit: -2500,
      hours: "100 over budget",
      status: "Over Budget",
    },
    {
      name: "Neo",
      budget: 70000,
      profit: 4000,
      hours: "1000 sold hours",
      status: "On Budget",
    },
    {
      name: "VR Website",
      budget: 70000,
      profit: 4000,
      hours: "2000 sold hours",
      status: "Under Budget",
    },
  ]

  return (
    <div>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-md bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Hours
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link " aria-current="page" href="#">
                Dashboard
              </a>
              <a className="nav-link" href="#">
                Projects
              </a>
              <a className="nav-link" href="#">
                Team
              </a>
              <a className="nav-link" href="#">
                Clients
              </a>
              <a className="nav-link" href="#">
                Time
              </a>
              <a className="nav-link" href="#">
                Reports
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="row">
          {/* Stats Cards & Revenue + Budget Charts */}
          <div className="col-md-9">
            <div className="row">
              {stats.map((stat, id) => (
                <div key={id} className="col-md-2 mb-3">
                  <div
                    className={`p-3 text-center border rounded ${
                      stat.alert ? "bg-danger text-white" : "bg-light"
                    }`}
                  >
                    <h5>{stat.value}</h5>
                    <p>{stat.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <h5>Total Revenue</h5>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={revenueData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" stroke="#3b82f6" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="col-md-6">
                <h5>Budget Breakdown</h5>
                <PieChart width={300} height={300}>
                  <Pie
                    data={budgetData}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </div>
            </div>
          </div>

          {/* Team Mood */}
          <div className="col-md-3">
            <h5>Team Mood</h5>
            <div className="border p-3 rounded">
              {teamMood.map((member, id) => (
                <div key={id} className="d-flex align-items-center mb-2">
                  <div className="me-2">
                    <img src="" alt="profile-icon" />
                  </div>
                  <div>
                    <p className="mb-0">
                      <strong>{member.name}</strong>
                    </p>
                    <p className="small text-muted mb-0">
                      {member.role} {member.mood}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget Status */}
        <h3 className="mt-4">Budget Status</h3>
        <div className="d-flex align-items-center mb-3">
          <div className="mx-4">
            <button className="btn btn-success me-2">+ Add New Project</button>
            <button className="btn btn-outline-primary me-2">
              Download report
            </button>
            <input
              type="date"
              className="form-control d-inline-block w-auto me-2"
            />
            <button className="btn btn-outline-secondary">Filter</button>
          </div>
        </div>
        <div className="row mb-4">
          {projects.map((project, id) => (
            <div key={id} className="col-md-4">
              <div className="p-3 border rounded">
                <h5>{project.name}</h5>
                <p>Budget: ${project.budget}</p>
                <p>Profit: ${project.profit}</p>
                <p>{project.hours}</p>
                <p
                  className={`badge ${
                    project.status === "Over Budget"
                      ? "bg-danger"
                      : project.status === "On Budget"
                      ? "bg-warning"
                      : "bg-success"
                  }`}
                >
                  {project.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
