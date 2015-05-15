if @vote.valid?
	json.success true
	json.id @vote.id.to_s
	
else
	json.success false
end