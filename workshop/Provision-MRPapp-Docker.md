<properties 
   pageTitle="Deploying Docker Host with Chef-Provisioning-Azure" 
   description="Article description that will be displayed on landing pages and in some search results" 
   services="service-name" 
   documentationCenter="dev-center-name" 
   authors="dtzar" 
   manager="manager-alias" 
   editor=""/>

<tags
   ms.service="virtualmachines"
   ms.devlang="ruby"
   ms.topic="chef-provisioning-azure-docker-host"
   ms.workload="azure" 
   ms.date="03/26/2015"
   ms.author="david.tesar"/>

# Create a Docker Host VM using Chef-Provisioning-Azure 

This hands on lab provisions a docker host to azure using chef-provisioning-azure
## Install pre-requisites to provision

This uses berkshelf to manage the dependencies required to provision a docker host with the Docker recipe from the Chef supermarket.

1. Create a new Docker cookbook

		Knife cookbook create dockerhost
2. Move to the newly created cookbook directory
	
		cd ~/chef-repo/cookbooks/dockerhost

3. Create a Berksfile

		Berks init .

4. Edit the Berksfile
	
		Nano Berksfile

5. Add in the line for your dependencies.  In this case it is cookbook "docker". Your file should look like:
	
		source "https://supermarket.getchef.com"
		cookbook "docker"
		metadata

	This pulls in the well-established docker cookbook from the Chef Supermarket
6. Install cookbooks you specified in the Berksfile and their dependencies
	
		berks install
7. Vendor the cookbooks specified by the Berksfile into a directory
	
		berks vendor ~/chef-repo/cookbooks

## Create recipe and provision docker host

Now we create a new recipe which to provision the docker host utilizing the chef-provisioning-azure functionality and verify the host is working provisioning is complete.  

1. Create the Azure-provisioning recipe which creates a Docker host on Azure:

		nano recipes/dockerhostprovision.rb

2. Copy the following contents into the dockerhostprovision.rb recipe

		with_driver 'azure'
		
		with_machine_options(
		  bootstrap_options: {
		    cloud_service_name: '{cloud_service_name}',
		    storage_account_name: '{storage_account_name}',
		    #:vm_size => "A4"
		    location: 'West US'
		  },
		  password: 'dockerPassw0rd'
		)
		
		machine 'dockerhost' do
		  recipe 'docker'
		end
3. Provision a new docker host from your newly created recipe

		chef-client -z recipes/dockerhostprovision.rb

   > [NOTE] Provisioning will take ~3 or more minutes

4. Connect to your docker host VM with an SSH client and verify that docker is running
	
		Ubuntu
		dockerPassw0rd
		sudo docker info

 

## Next steps

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
[Link 3 to another documentation topic]

<!--Link references--In actual articles, you only need a single period before the slash.>
[Link 3 to another documentation topic]: ../storage-whatis-account/
