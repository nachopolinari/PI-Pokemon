
const validate = (req, res, next) => {
    const { name, img, life, attack, defense, speed, height, weight, types } = req.body;

    if (!name || !isNaN(name)) res.status(400).json({ error: 'Name is missing or contains numbers.' });
    if (!img) res.status(400).json({ error: 'Missing img' });
    if (!life) res.status(400).json({ error: 'Missing life' });
    if (!attack) res.status(400).json({ error: 'Missing attack' });
    if (!defense) res.status(400).json({ error: 'Missing defense' });
    if (!speed) res.status(400).json({ error: 'Missing speed' });
    if (!height) res.status(400).json({ error: 'Missing height' });
    if (!weight) res.status(400).json({ error: 'Missing weight' });
    if (!types) res.status(400).json({ error: 'Missing types' });

    next();
};

module.exports = validate;

