<template>

  <router-view></router-view>
  <div class="container">
    <div class="row">
      <div class="clo-md-3">
        <h2>User</h2>
        <div class="card card-body">
          <form >
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Name">
            </div>
            <div class="form-group">
              <input type="email" class="form-control" placeholder="Email">
            </div>
            <div class="form-group">
              <input type="submit" class="form-control btn btn-success btn-block text-dark" placeholder="Enviar">
            </div>
            <div class="form-group">
              <input type="reset" class="form-control btn btn-primary btn-block" placeholder="Reestablecer">
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-9">
        <div class="table-responsive">
          <h1>Users List</h1>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th colspan="2">Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fran</td>
                <td>romo@gmail.com</td>
                <td><button class="btn btn-info btn-black">Update</button></td>
                <td><button class="btn btn-danger btn-black">Delete</button></td> 
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

</template>