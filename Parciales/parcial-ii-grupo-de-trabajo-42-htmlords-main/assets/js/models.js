const urls = {
    search: 'https://api.scryfall.com/cards/search/?q=',
    random: 'https://api.scryfall.com/cards/random/?q='
}

const filters = {
    common: 'r:common',
    uncommon: 'r:uncommon',
    rare: 'r:rare',
    basicLand: 't:"basic land"',
    mythic: 'r:mythic',
}
const pagination = {
    common: 53,
    uncommon: 48,
}

const firstRender = `
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
<div class="Card">
<div class="card-image">
    <img src="https://backs.scryfall.io/large/5/9/597b79b3-7d77-4261-871a-60dd17403388.jpg?1665006177" />
</div>
</div>
`;

export {
    urls,
    filters,
    pagination, 
    firstRender
}