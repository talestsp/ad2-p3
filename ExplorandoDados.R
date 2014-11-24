a_tags = read.csv("../ad2-p2/data/artist_mbtag.csv")
unique_artist = unique(a_tags$artist_id)

a_tags$contador = 1
teste = aggregate(contador ~ artist_id, a_tags, FUN = sum)
