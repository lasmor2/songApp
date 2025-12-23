# Test Data for Songs & Albums API

## Albums Test Data

### Create Album 1 - Abbey Road
```json
{
  "title": "Abbey Road",
  "songs": []
}
```

### Create Album 2 - Dark Side of the Moon
```json
{
  "title": "Dark Side of the Moon",
  "songs": []
}
```

### Create Album 3 - Thriller
```json
{
  "title": "Thriller",
  "songs": []
}
```

## Songs Test Data

### Song 1 - Come Together (Replace ALBUM_ID_HERE with actual album ID)
```json
{
  "title": "Come Together",
  "releasedDate": "1969-09-26T00:00:00.000Z",
  "duration": "4:20",
  "lyrics": "Here come old flat top, he come grooving up slowly. He got joo-joo eyeball, he one holy roller...",
  "album": "ALBUM_ID_HERE"
}
```

### Song 2 - Something
```json
{
  "title": "Something",
  "releasedDate": "1969-09-26T00:00:00.000Z",
  "duration": "3:03",
  "lyrics": "Something in the way she moves attracts me like no other lover...",
  "album": "ALBUM_ID_HERE"
}
```

### Song 3 - Money
```json
{
  "title": "Money",
  "releasedDate": "1973-03-01T00:00:00.000Z",
  "duration": "6:23",
  "lyrics": "Money, get away. Get a good job with good pay and you're okay...",
  "album": "ALBUM_ID_HERE"
}
```

### Song 4 - Billie Jean
```json
{
  "title": "Billie Jean",
  "releasedDate": "1982-11-30T00:00:00.000Z",
  "duration": "4:54",
  "lyrics": "Billie Jean is not my lover, she's just a girl who claims that I am the one...",
  "album": "ALBUM_ID_HERE"
}
```

## Testing Workflow

1. **Start your NestJS server**: `npm run start:dev`
2. **Import the Postman collection**: Import `postman-collection.json` into Postman
3. **Create albums first**: Use the album creation requests
4. **Copy album IDs**: From the response, copy the `_id` field
5. **Create songs**: Replace `ALBUM_ID_HERE` with actual album IDs in song requests
6. **Test CRUD operations**: Use GET, PATCH, DELETE endpoints with actual song IDs

## API Endpoints Summary

- `POST /albums` - Create album
- `GET /albums` - Get all albums
- `POST /songs` - Create song
- `GET /songs` - Get all songs
- `GET /songs/:id` - Get song by ID
- `PATCH /songs/:id` - Update song
- `DELETE /songs/:id` - Delete song