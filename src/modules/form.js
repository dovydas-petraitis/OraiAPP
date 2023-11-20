
const form = ()=> {
    return`
    <div class="form-group">
    <input type="text" class="m-2 form-control city" placeholder="Miestas">
    </div>
    <div class="form-group">
    <input type="text" class="m-2 form-control term" placeholder="Jusu Adresas">
    </div>
    <div class="form-group">
    <input type="text" class="m-2 form-control result" readonly>
    </div>
    <div class="form-group">
    <button type="submit" class="m-2 btn btn-primary">Ieskoti</button>
    </div>
    `
}

export default form