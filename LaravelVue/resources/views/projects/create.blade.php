<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css"></link>
    <title>Document</title>
    <style>
        body{
            margin-top:40px;
        }
        .control{
            margin-top:10px;
        }
    </style>
</head>
<body>
<div id="app" class="container">
<form action="/projects" method="POST" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
        @csrf
        <div class="control">
            <label for="title" class="label">Project title:</label>
            <input v-model="form.title" type="text" name="title" class="input" id="title">
            <span v-if="form.errors.has('title')" class="help is-danger" v-text="form.errors.get('title')"></span>
        </div>
        <div class="control">
            <label for="description" class="label">Description:</label>
            <input v-model="form.description" type="text" class="input" id="description" name="description">
            <span v-if="form.errors.has('description')" class="help is-danger" v-text="form.errors.get('description')"></span>
        </div>
        <div class="control">
            <button class="button is-primary" :disabled="form.errors.any()">Create</button>
        </div>
    </form>
</div>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
<script src="/js/app.js"></script>
</body>
</html>