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
   ms.author="davete"/>

# Create a Docker Host VM using Chef-Provisioning-Azure 

  ![][8]

This hands on lab provisions a docker host to azure using chef-provisioning-azure
## Install pre-requisites to provision

nec non neque. <a href="http://msdn.microsoft.com/library/azure" target="_blank">Link text for link outside of azure.microsoft.com</a>.

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

Ut eu pretium lacus. Nullam purus est, iaculis sed est vel, euismod vehicula odio.   

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
		End
3. Provision a new docker host from your newly created recipe

		chef-client -z recipes/dockerhostprovision.rb

4. Connect to your docker host VM and verify that docker is running
	
		Ubuntu
		dockerPassw0rd
		sudo docker info

 

## Next steps

Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ultricies, ipsum vitae volutpat hendrerit, purus diam pretium eros, vitae tincidunt nulla lorem sed turpis: [Link 3 to another azure.microsoft.com documentation topic]. 

<!--Image references-->
[5]: ./media/markdown-template-for-new-articles/octocats.png
[6]: ./media/markdown-template-for-new-articles/pretty49.png
[7]: ./media/markdown-template-for-new-articles/channel-9.png
[8]: ./media/markdown-template-for-new-articles/copytemplate.png

<!--Link references--In actual articles, you only need a single period before the slash.>
[Link 1 to another azure.microsoft.com documentation topic]: ../virtual-machines-windows-tutorial/
[Link 2 to another azure.microsoft.com documentation topic]: ../web-sites-custom-domain-name/
[Link 3 to another azure.microsoft.com documentation topic]: ../storage-whatis-account/
