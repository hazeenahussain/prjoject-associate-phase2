import React from 'react';

function Associatehome(props) {
    return (
        <div>
         <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>UPCOMING EVENTS</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Projects</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    {/* Default box */}
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">List of Events</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body p-0">
        <table className="table table-striped projects">
          <thead>
            <tr>
              <th style={{width: '1%'}}>
                SL NO.
              </th>
              <th style={{width: '20%'}}>
                 Upcoming Events & Hall 
              </th>
              <th style={{width: '30%'}}>
                Date & Time Duration
              </th>
              <th>
                Event Organiser Name
              </th>
              
              <th style={{width: '20%'}}>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                1
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  sun
                </small>
              </td>
              <td>
                12.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                              
                  Associate
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                2
              </td>
              <td>
                <a>
                 Testing
                </a>
                <br />
                <small>
                  Moon
                </small>
              </td>
              <td>
                18.03.22
                <br></br>
                <small>
                  From 1.00 to 3.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
                            <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                3
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  Earth
                </small>
              </td>
              <td>
                2.03.22
                <br></br>
                <small>
                  From 3.00 to 5.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                4
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  sun
                </small>
              </td>
              <td>
                14.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                5
              </td>
              <td>
                <a>
                 React
                </a>
                <br />
                <small>
                  Moon
                </small>
              </td>
              <td>
                20.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                6
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  sun
                </small>
              </td>
              <td>
                16.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                7
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  sun
                </small>
              </td>
              <td>
                12.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                8
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  Earth
                </small>
              </td>
              <td>
                12.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
            <tr>
            <td>
                9
              </td>
              <td>
                <a>
                 Project
                </a>
                <br />
                <small>
                  Moon
                </small>
              </td>
              <td>
                12.03.22
                <br></br>
                <small>
                  From 12.00 to 1.00
                </small>
              </td>
              <td className="project_progress">
                
                
                  Associate
                
              </td>
              
              <td className="project-actions text-right">
                {/* <a className="btn btn-primary btn-sm" href="#">
                  <i className="fas fa-folder">
                  </i>
                  View
                </a> */}
                <a className="btn btn-info btn-sm" href="#">
                  <i className="fas fa-pencil-alt">
                  </i>
                  Edit
                </a>
                <a className="btn btn-danger btn-sm" href="#">
                  <i className="fas fa-trash">
                  </i>
                  Cancel
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* /.card-body */}
    </div>
    {/* /.card */}
  </section>
  {/* /.content */}
</div>



  
        </div>
    );
}

export default Associatehome;