<template>
  <div>
        <md-field>
        <label>Initial Value</label>
        <md-input v-model="initial"></md-input>
        </md-field>

        <md-field>
        <label>Initial Value (Read Only)</label>
        <md-input v-model="initial" readonly></md-input>
        </md-field>

        <md-field>
        <label>Type here!</label>
        <md-input v-model="type"></md-input>
        <span class="md-helper-text">Helper text</span>
        </md-field>

        <md-field>
        <label>With label</label>
        <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
        </md-field>

        <md-field md-inline>
        <label>Inline</label>
        <md-input v-model="inline"></md-input>
        </md-field>

        <md-field>
        <label>Number</label>
        <md-input v-model="number" type="number"></md-input>
        </md-field>

        <md-field>
        <label>Textarea</label>
        <md-textarea v-model="textarea"></md-textarea>
        </md-field>

        <md-field>
        <label>Textarea with Autogrow</label>
        <md-textarea v-model="autogrow" md-autogrow></md-textarea>
        </md-field>

        <md-field>
        <label>Disabled</label>
        <md-input v-model="disabled" disabled></md-input>
        </md-field>
        <md-field>
            <md-chips v-model="fruits" md-placeholder="Add fruit..."></md-chips>
        </md-field>
        <md-field>
           <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
        </md-field>
         <md-progress-bar md-mode="indeterminate"></md-progress-bar>

        <label for="movie">Movie</label>
        <md-select v-model="movie" name="movie" id="movie">
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
        </md-select>

        <md-switch v-model="array" value="1">Array</md-switch>
        <md-switch v-model="array" value="2">Array</md-switch>
        <md-switch v-model="boolean">Boolean</md-switch>
        <md-switch v-model="string" value="my-switch">String</md-switch>
        <md-switch v-model="novalue">No Value</md-switch>
        <md-switch v-model="disabled" disabled>Disabled</md-switch>

        <table>
        <tr>
            <th>Array</th>
            <th>Boolean</th>
            <th>String</th>
            <th>No Value</th>
        </tr>

        <tr>
            <td>{{ array }}</td>
            <td>{{ boolean }}</td>
            <td>{{ string }}</td>
            <td>{{ novalue }}</td>
        </tr>
        </table>

  </div>
</template>

<style lang="scss">

    .md-content {
    width: max-content;
    height: max-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 450px;
    }

   .md-progress-spinner {
    margin: 24px;
    }

    .md-field .md-progress-bar {

        margin: 24px;
    }
    
    //switch 
     .md-switch {
        display: flex;
    }

    table {
        width: 100%;
        table-layout: fixed;

    th {
      text-align: left;
    }
  }

</style>

<script>
  export default {
    name: 'FormControl',
    data: () => ({
        initial: 'Initial Value',
        type: null,
        withLabel: null,
        inline: null,
        number: null,
        textarea: null,
        autogrow: null,
        disabled: null,

        //editable chips
        fruits: [
            'Orange',
            'Apple',
            'Pineapple'
            ],

        //select
        movie: 'godfather',
        country: null,
        font: null,

        array: [],
        boolean: false,
        string: null,
        novalue: null,
        disabled: true

    })
  }
</script>
