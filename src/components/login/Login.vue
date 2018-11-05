<template>
    <div class="col-md-6 offset-md-3">
        <div class="row">
            <div class="col-md-6 mx-auto">

                <!-- form card login -->
                <div class="card rounded-40">
                    <h3>Login</h3>
                    <div class="card-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Usuário/E-mail</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insira seu e-mail...">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Insira sua senha...">
                        </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Lembre-me</label>
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
